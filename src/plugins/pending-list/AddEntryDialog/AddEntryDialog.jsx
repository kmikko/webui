import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import TextField from 'common/TextField';

const AddEntryDialog = ({ open, onClose, handleSubmit }) => (
  <Dialog open={open} onRequestClose={onClose}>
    <DialogTitle>Add New Entry</DialogTitle>
    <form onSubmit={handleSubmit}>
      <DialogContent>
        <Field
          autoFocus
          id="title"
          label="Entry Title"
          fullWidth
          name="title"
          component={TextField}
        />
        <Field
          id="entry-url"
          label="Entry URL"
          fullWidth
          name="original_url"
          component={TextField}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="button">
          Cancel
        </Button>
        <Button variant="submit" color="primary">
          Add
        </Button>
      </DialogActions>
    </form>
  </Dialog>
);

AddEntryDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

AddEntryDialog.defaultProps = {
  open: false,
};

export default reduxForm({
  form: 'addEntry',
})(AddEntryDialog);
