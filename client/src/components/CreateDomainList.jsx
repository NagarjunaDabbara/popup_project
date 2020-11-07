import React,{useState,useEffect}from 'react'
import Modal from 'react-modal'
import axios from 'axios'
export default function CreateDomain(){
    const[modelIsOpen,setModalIsOpen] = useState(false)
  const [customerSignUp, setCustomerSignUp] = useState(
    { domainName: '', apiKey: '', emailLimit: '',status:[]}
  );
  const handleChange = (event) => {
    setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
  }  
  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:5000/api/smtp', customerSignUp)
     }
    return (
        <div>
             <div>
      <button class="btn issues_history_dark" onClick={()=>setModalIsOpen(true)}>
          Add smtp
          <span>
            <i class="fa fa-plus" aria-hidden="true"></i>
          </span>
        </button>
       <Modal isOpen={modelIsOpen}
       onRequestClose={()=>setModalIsOpen(false)}
        >
       <div>
        <div class="basic_form_bg_dark">
          <form  onSubmit={handleSubmit}>
            <h2>Add SMTP</h2>
            <div class="input_align_dark">
              <p>Enter Domain:</p>
              <input
                class="input_feild_dark"
                name="domainName"
                value={customerSignUp.domainName} onChange={handleChange}
                placeholder="eg:example.com"
                required
              />
            </div>

            <div class="input_align_dark">
              <p>Enter API key:</p>
              <input
                class="input_feild_dark"
                name="apiKey"
                value={customerSignUp.apiKey} onChange={handleChange}
                placeholder=""
                required
              />
            </div>
            <div class="input_align_dark">
              <p>Daily Email Limit(0 = Unlimited)</p>
              <input
                class="input_feild_dark"
                name="emailLimit"
                value={customerSignUp.emailLimit} onChange={handleChange}
                placeholder=""
                required
              />
            </div>

            <div class="input_align_dark">
              <p>Status</p>
              <select class="selectbox_dark">
                <option>Select</option>
                <option>Active</option>
                <option>In Active</option>
              </select>
            </div>
            <div>
              <button class="senddata_dark">Send Data</button>
              <button class="senddata_dark" onClick={()=>setModalIsOpen(false)} >close</button>
            </div>
          </form>
        </div>
      </div>
       </Modal>
      </div>
        </div>
    )
}
