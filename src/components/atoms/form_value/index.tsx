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
    value?: any;
    label?: string;
  }[];
  defaultValue?: {
    value?: any;
    label?: string;
  }[];
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
        case "selectMutiple":
          return (
            <>
              {field.options &&
                field.options.length > 1 &&
                field.defaultValue && (
                  <Autocomplete
                    readOnly={field.readonly}
                    size="small"
                    ref={field.ref}
                    id={field.id}
                    multiple
                    filterSelectedOptions
                    defaultValue={field.defaultValue}
                    onChange={(e, newValue: any) => {
                      handleOnChangeField({
                        target: {
                          name: field.id,
                          value: newValue,
                        },
                      });
                    }}
                    options={field.options}
                    getOptionKey={(option) => option?.value}
                    getOptionLabel={(option) => option?.label}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        size="small"
                        placeholder={t(field.label)}
                        variant="outlined"
                      />
                    )}
                  />
                )}
            </>
          );
        default:
          return <>error</>;
      }
    },
    [handleOnChangeField]
  );

  const renderFields = useMemo(() => {
    return fields.map((field) => (
      <Grid item xs={10} key={field.id}>
        <Grid container alignItems="center">
          <Grid item xs={10}>
            {renderField(field)}
          </Grid>
        </Grid>
      </Grid>
    ));
  }, [fields, renderField]);

  return <>{renderFields}</>;
};

export default FormField;
