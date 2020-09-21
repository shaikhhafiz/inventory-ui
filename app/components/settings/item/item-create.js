import React from 'react'
import { saveItem } from '../../../core/request-util'

export default function ItemCreate() {
  const [nameEn, setNameEn] = React.useState('');
  const [nameLocal, setNameLocal] = React.useState('');

  const handleSubmit = () => {
    saveItem({ nameEn: nameEn, nameLocal: nameLocal })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          <form className="form-horizontal">
            <fieldset>
              <legend>Item Create</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-md-3 control-label" htmlFor="nameEn">Name En</label>
                    <div className="col-md-9">
                      <input id="nameEn" name="nameEn"
                        onChange={(e) => setNameEn(e.target.value)}
                        type="text" placeholder="Enter name en"
                        className="form-control input-md" />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-md-3 control-label" htmlFor="nameLocal">Name Local</label>
                    <div className="col-md-9">
                      <input id="nameLocal" name="nameLocal"
                        onChange={(e) => setNameLocal(e.target.value)}
                        type="text" placeholder="Enter nameLocal"
                        className="form-control input-md" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-9">
                  <button id="submit" name="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary">Save</button>
                </div>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}