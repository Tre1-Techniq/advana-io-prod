import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

const AdminCreateUserForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      first_name: '',
      last_name: '',
      company: '',
      manufacturer: '',
      role: '',
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Username</label>    
            <Controller
                name="username"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </div>

        <div>
            <label>First Name</label>
            <Controller
                name="first_name"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </div>
      
        <div>
            <label>Last Name</label>
            <Controller
                name="last_name"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </div>
      
        <div>
            <label>Parent Company</label>
            <Controller
                name="parent_company"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </div>

        <div>
            <label>Company</label>
            <Controller
                name="company"
                control={control}
                render={({ field }) => <Input {...field} />}
            />
        </div>

        <div>
        <label>Role</label>
            <Controller
                name="role"
                control={control}
                render={({ field }) => <Select 
                {...field}
                options={[
                    { value: "Admin", label: "Admin" },
                    { value: "Brand", label: "Brand" },
                    { value: "Operator", label: "Operator" }
                ]} 
                />}
            />
        </div>
      
        <div>
            <input type="submit" />
        </div>

    </form>
  );
};

export default AdminCreateUserForm;
