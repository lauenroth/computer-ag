import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms';

const WebpageForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.webpage?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.webpage?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>

        <TextField
          name="slug"
          defaultValue={props.webpage?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="design"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Design
        </Label>

        <TextField
          name="design"
          defaultValue={props.webpage?.design}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="design" className="rw-field-error" />

        <Label
          name="html"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Html
        </Label>

        <TextField
          name="html"
          defaultValue={props.webpage?.html}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="html" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default WebpageForm;
