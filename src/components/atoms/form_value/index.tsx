import { FC, useCallback, useMemo } from "react";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { IFormState } from "@/interfaces/action";
import { t } from "i18next";

export interface IFormField {
  id: string;
  label: string;
  type: "text" | "number" | "select" | "decimal" | "selectMutiple";
  isRequire?: boolean;
  readonly?: boolean;
  ref?: any;
  options?: {
    value?: string | number;
    label?: string;
  }[];
  defaultValue?: string | number;
}
interface Props extends IFormState {
  fields: IFormField[];
  handleOnChangeField: (data: any) => void;
  formData: any;
}

const FormField: FC<Props> = ({
  fields,
  handleOnChangeField,
  formData,
  action,
}) => {
  const renderField = useCallback(
    (field: IFormField) => {
      switch (field.type) {
        case "select":
          return (
            <>
              {((field.options && field.options.length > 1 && formData) ||
                action === "ADD_NEW") && (
                <Autocomplete
                  disablePortal
                  readOnly={field.readonly}
                  size="small"
                  ref={field.ref}
                  id={field.id}
                  defaultValue={
                    field.options &&
                    field.options.length > 0 &&
                    field.options.find(
                      (option) => option.value === formData[field.id] || ""
                    )
                  }
                  onChange={(e, newValue: any) => {
                    handleOnChangeField({
                      target: {
                        name: field.id,
                        value: newValue ? newValue.value : "",
                      },
                    });
                  }}
                  options={
                    field.options && field.options.length > 0
                      ? [...field.options, { value: "", label: "" }]
                      : [{ value: "", label: "" }]
                  }
                  getOptionKey={(option) => option.value.toString()}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      required={field.isRequire}
                      variant="outlined"
                    />
                  )}
                />
              )}
            </>
          );
        case "decimal":
          return (
            <TextField
              size="small"
              fullWidth
              required={field.isRequire}
              inputRef={field.ref}
              id={field.id}
              name={field.id}
              autoComplete="new-password"
              InputProps={{
                readOnly: field.readonly,
                inputMode: "decimal",
              }}
              type="decimal"
              defaultValue={formData[field.id] ?? ""}
              onChange={(e) => {
                handleOnChangeField(e);
              }}
            />
          );
        //case select muti
        case "selectMutiple":
          return (
            <>
              {((field.options && field.options.length > 1 && formData) ||
                action === "ADD_NEW") && (
                <Autocomplete
                  disablePortal
                  readOnly={field.readonly}
                  size="small"
                  ref={field.ref}
                  id={field.id}
                  multiple={true}
                  // defaultValue={
                  //   field.options &&
                  //   field.options.length > 0 &&
                  //   field.options.find(
                  //     (option) => option.value === formData[field.id] || ""
                  //   )
                  // }
                  onChange={(e, newValue: any) => {
                    handleOnChangeField({
                      target: {
                        name: field.id,
                        value: newValue ? newValue.value : "",
                      },
                    });
                  }}
                  options={
                    field.options && field.options.length > 0
                      ? [...field.options, { value: "", label: "" }]
                      : [{ value: "", label: "" }]
                  }
                  getOptionKey={(option) => option.value.toString()}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      size="small"
                      required={field.isRequire}
                      variant="outlined"
                    />
                  )}
                />
              )}
            </>
          );
        default:
          return (
            <TextField
              size="small"
              fullWidth
              required={field.isRequire}
              inputRef={field.ref}
              id={field.id}
              name={field.id}
              autoComplete="new-password"
              InputProps={{
                readOnly: field.readonly,
              }}
              type={field.type}
              defaultValue={formData[field.id] ?? ""}
              onChange={(e) => handleOnChangeField(e)}
            />
          );
      }
    },
    [action, formData, handleOnChangeField]
  );

  const renderFields = useMemo(() => {
    return fields.map((field) => (
      <Grid item xs={6} key={field.id}>
        <Grid container alignItems="center">
          <Grid item xs={5}>
            <InputLabel required={field.isRequire} htmlFor={field.id}>
              {t(field.label)}
            </InputLabel>
          </Grid>
          <Grid item xs={6}>
            {renderField(field)}
          </Grid>
        </Grid>
      </Grid>
    ));
  }, [fields, renderField]);

  return <>{renderFields}</>;
};

export default FormField;
