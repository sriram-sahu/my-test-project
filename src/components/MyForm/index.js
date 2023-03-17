import { Component } from 'react'
import {v4} from 'uuid'
import EachItem from '../EachItem'
import './index.css'

class MyForm extends Component{
    state={tableData:[],name:'',city:'',salary:'',mobile:'',proflePic:''}

    onSubmitForm= async event=>{
        event.preventDefault()
        const {name,city,salary,mobile,proflePic,tableData}=this.state
        const data= {
            name,city,salary,mobile,proflePic,id:v4()
        }
        await this.setState({tableData:[...tableData,data]})
        localStorage.setItem('data',JSON.stringify(tableData))
    }

    onChangeName=event=>{
        this.setState({name:event.target.value})
    }

    onChangeCity=event=>{
        this.setState({city:event.target.value})
    }
    onChangeSalary=event=>{
        this.setState({salary:event.target.value})
    }
    onChangeMobile=event=>{
        this.setState({mobile:event.target.value})
    }
    onChangeProfilePic=event=>{
        this.setState({proflePic:event.target.value})
    }

    deleteItem=(id)=>{
        const {tableData}=this.state
        const filter =tableData.filter(eachItem=>eachItem.id!==id)
        this.setState({tableData:filter})
    }

    displayResult=()=>{
        const {tableData}=this.state
        return(
            <div>
                <ul className="list">
                    <li>name</li>
                    <li>city</li>
                    <li>Salary</li>
                    <li>mobile</li>
                    <li>Profile</li>
                    <li>edit</li>
                    <li>Delete</li>
                    
                </ul>
            <ul>{tableData.map(eachItem=>(
               <EachItem key={eachItem.id} details={eachItem} deleteItem={this.deleteItem} />
            ))}</ul>
            </div>
        )
    }


    render(){
        const {name,city,salary,mobile,proflePic,tableData}=this.state
        return(
            <div className='app-container'>
                <form onSubmit={this.onSubmitForm}>
                    <label htmlFor='name'>Name</label>
                    <input type="text" id="name" className='input' value={name} onChange={this.onChangeName}/>
                    <br />
                    <label htmlFor='city'>City</label>
                    <select id="city" className='input' value={city} onChange={this.onChangeCity}>
                        <option>Hyderabad</option>
                        <option>Chennai</option>
                        <option>Banglore</option>
                    </select>
                    <br />
                    <label htmlFor='salary'  >Salary</label>
                    <input type='number' className='input' value={salary} onChange={this.onChangeSalary}/>
                    <br />
                    <label htmlFor='mobile'>Mobile</label>
                    <input type='number' className='input' value={mobile} onChange={this.onChangeMobile}/>
                    <br />
                    <label htmlFor='mobile'>Profile Picture</label>
                    <input type="file" className='input'  value={proflePic} onChange={this.onChangeProfilePic}/>
                    <br />
                    <button type='submit' className='button'>submit</button>
                </form>
                {this.displayResult() }
            </div>
        )
    }
}

export default MyForm