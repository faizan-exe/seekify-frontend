export default function File() {


    return (
<label className="form-control w-full max-w-sm">
  <div className="label">
    <span className="label-text">Add Article</span>

    
  </div>
  <div className=" flex flex-row">
  <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
  <button type="button" className="btn btn-primary ml-4" onClick={() => {console.log("hello")}}>Upload</button>
  </div>


</label>
    )
}