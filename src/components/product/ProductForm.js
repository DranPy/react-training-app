import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Select from 'react-select';
import { FormMode } from 'utils/enums';

class ProductForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    fetchAuthors: PropTypes.func,
    fetchCategories: PropTypes.func,
    authors: PropTypes.array,
    categories: PropTypes.array,
    mode: PropTypes.number,
  };

  componentDidMount() {
    this.props.fetchAuthors();
    this.props.fetchCategories();
  }

  render() {
    const { handleSubmit, authors, categories, pristine, reset, submitting, mode } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row form-group">
            <div className="col-4">
              <label>Name</label>
            </div>
            <div className="col-8">
              <Field className="form-control" name="name" component="input" type="text" />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-4">
              <label>Description</label>
            </div>
            <div className="col-8">
              <Field className="form-control" name="description" component="textarea" type="text" />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-4">
              <label>Price</label>
            </div>
            <div className="col-8">
              <Field className="form-control" name="price" component="input" type="text" />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-4">
              <label>Image URL</label>
            </div>
            <div className="col-8">
              <Field className="form-control" name="imgUrl" component="input" type="text" />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-4">
              <label>Authors</label>
            </div>
            <div className="col-8">
              <Field
                name="authors"
                component={({ input: { value, onChange, onBlur } }) => (
                  <Select
                    value={value || ''}
                    isMulti={true}
                    onChange={selectedValue => onChange(selectedValue)}
                    onBlur={() => onBlur(value)}
                    options={authors}
                    placeholder="Select"
                  />
                )}
              />
            </div>
          </div>

          <div className="row form-group">
            <div className="col-4">
              <label>Categories</label>
            </div>
            <div className="col-8">
              <Field
                name="categories"
                component={({ input: { value, onChange, onBlur } }) => (
                  <Select
                    isMulti={true}
                    value={value || ''}
                    onChange={selectedValue => onChange(selectedValue)}
                    onBlur={() => onBlur(value)}
                    options={categories}
                    placeholder="Select"
                  />
                )}
              />
            </div>
          </div>
          <div className="commands">
            <input
              type="submit"
              className="btn btn-sm btn-primary"
              disabled={pristine || submitting}
              value={mode === FormMode.Add ? 'Add' : 'Save'}
            />
            {mode === FormMode.Add && (
              <input
                type="button"
                className="btn btn-sm"
                disabled={pristine || submitting}
                value="Clear"
                onClick={reset}
              />
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default ProductForm;
