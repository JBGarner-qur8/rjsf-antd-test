import { ExclamationCircleOutlined } from "@ant-design/icons";
import { type FormContextType, type RJSFSchema, type StrictRJSFSchema, type ErrorListProps, TranslatableString } from "@rjsf/utils";
import { Alert, List, Space } from "antd";


export function ErrorList<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  errors,
  registry,
}: ErrorListProps<T, S, F>) {
  const { translateString } = registry;
  const renderErrors = () => (
    <List className='list-group' size='small'>
      {errors.map((error, index) => (
        <List.Item key={index}>
          <Space>
            <ExclamationCircleOutlined />
            {error.stack}
          </Space>
        </List.Item>
      ))}
    </List>
  );

  return (
    <Alert
      className='panel panel-danger errors'
      description={renderErrors()}
      message={translateString(TranslatableString.ErrorsLabel)}
      type='error'
    />
  );
}