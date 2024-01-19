"use client";
interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
}

import { useRef, ReactNode } from "react";
const Form = ({ children, action, className, onSubmit }: FormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={formRef}
      action={async (formData) => {
        await action(formData);
        formRef.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
