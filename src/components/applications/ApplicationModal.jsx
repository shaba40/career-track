import { Modal } from '../common/Modal';
import { ApplicationForm } from './ApplicationForm';

export function ApplicationModal({ application, onClose, onSubmit }) {
  return (
    <Modal title={application ? 'Edit Application' : 'New Application'} onClose={onClose}>
      <ApplicationForm initialValues={application} onSubmit={onSubmit} />
    </Modal>
  );
}
