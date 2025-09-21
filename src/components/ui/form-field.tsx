import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: any;
  onChange: (e: React.ChangeEvent<any>) => void;
  error?: string | false;
}

export const FormField = ({
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: FormFieldProps) => (
  <div>
    <Label htmlFor={id}>{id.charAt(0).toUpperCase() + id.slice(1)}</Label>
    <Input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={error ? "border border-red-600" : ""}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);
