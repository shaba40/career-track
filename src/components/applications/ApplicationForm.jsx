import { useState } from 'react';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { statusOptions } from '../../utils/constants';

export function ApplicationForm({ onSubmit, initialValues = {} }) {
  const [form, setForm] = useState({
    company: initialValues.company || '',
    role: initialValues.role || '',
    status: initialValues.status || 'Applied',
    location: initialValues.location || '',
    salary: initialValues.salary || '',
    notes: initialValues.notes || '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <Input label="Company" name="company" value={form.company} onChange={handleChange} required />
      <Input label="Role" name="role" value={form.role} onChange={handleChange} required />
      <label className="field">
        <span>Status</span>
        <select name="status" value={form.status} onChange={handleChange}>
          {statusOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <Input label="Location" name="location" value={form.location} onChange={handleChange} />
      <Input label="Salary" name="salary" value={form.salary} onChange={handleChange} />
      <label className="field field-wide">
        <span>Notes</span>
        <textarea name="notes" value={form.notes} onChange={handleChange} rows="4" />
      </label>
      <Button type="submit">Save Application</Button>
    </form>
  );
}
