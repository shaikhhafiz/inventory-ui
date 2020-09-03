import React from 'react'
import { saveItemRequisition } from '../../core/request-util'

export default function ItemRequisitionCreate() {
  const refNo = React.useRef();
  const reqDate = React.useRef();
  const status = React.useRef();

  const handleSubmit = () => {
    const reqBody = {
      refNo: refNo.current.value,
      reqDate: reqDate.current.value,
      status: status.current.value
    }
    saveItemRequisition(reqBody)
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
              <legend>Item Requisition Create</legend>

              <div className="row">

                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-md-3 control-label" htmlFor="refNo">Ref No</label>
                    <div className="col-md-9">
                      <input id="refNo" name="refNo"
                        ref={refNo}
                        type="text" placeholder="Enter ref no"
                        className="form-control input-md" />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-md-3 control-label" htmlFor="reqDate">Req Date</label>
                    <div className="col-md-9">
                      <input type="date"
                        id="reqDate"
                        name="reqDate"
                        className="form-control"
                        ref={reqDate} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">

                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-md-3 control-label" htmlFor="status">Status</label>
                    <div className="col-md-9">
                      <input id="status" name="status"
                        ref={status}
                        type="text" placeholder="Enter Status"
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
