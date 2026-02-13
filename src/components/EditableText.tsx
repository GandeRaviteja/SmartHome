import { useState, useRef, useEffect } from "react";
import { useEditMode } from "@/contexts/EditContext";

type EditableTextProps = {
  defaultValue: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  multiline?: boolean;
};

const EditableText = ({ defaultValue, as: Tag = "span", className = "", multiline = false }: EditableTextProps) => {
  const { isEditMode } = useEditMode();
  const [value, setValue] = useState(defaultValue);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.innerText !== value) {
      ref.current.innerText = value;
    }
  }, []);

  if (!isEditMode) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag
      ref={ref as any}
      className={`${className} outline-none ring-2 ring-accent/40 rounded px-1 cursor-text`}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => setValue(e.currentTarget.innerText)}
    />
  );
};

export default EditableText;
