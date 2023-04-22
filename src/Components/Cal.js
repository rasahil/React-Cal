import React from 'react';
import './Cal.css'
import Form from 'react-bootstrap/Form';

export default function Cal() {

    function validateForm(e){

        e.preventDefault();

        let x = document.forms["myForm"]["fn"].value;
        let y = document.forms["myForm"]["sn"].value;
        if(isNaN(x))
       {
        document.getElementById("text").value=" Don't  Enter String";
        return false;
       }
        else if (x === "") {
          document.getElementById("text").innerHTML=" Please Enter First value";
          return false;
        }
        
        else if(isNaN(y))
       {
        document.getElementById("text2").innerHTML=" Don't Enter String";
        return false;
       }
        else if (y === "") {
          // alert("Enter a Second Number");
          document.getElementById("text2").innerHTML="Please Enter Second value";

          return false;
        }
     }

      function add() {
        var fn = parseInt(document.myForm.fn.value);
        var sn = parseInt(document.myForm.sn.value);
        var sum = fn + sn;

        document.myForm.total.value = " Addition of two numbers  ";
        document.myForm.result.value = sum ;
        // document.myForm.result.innerHTML = sum.toString() ;
        // document.getElementsByName("result").value= sum;
        // document.querySelector("result").value= sum;

        //validation for addition
        let first = document.getElementById("first").value;
        if (first === "") {
          document.getElementById("text").innerHTML = "Enter Valid Number";
          return false;
        } else if(isNaN(first)){
          document.getElementById("text").innerHTML = "Don't Enter String";
          return true;
        }
      }

      function sub() {
        var fn = parseInt(document.myForm.fn.value);
        var sn = parseInt(document.myForm.sn.value);
        var sub = fn - sn;
        document.myForm.total.value = "Substraction of values:" ;
        document.myForm.result.value = sub ;
        
      }
      function mul() {
        var fn = parseInt(document.myForm.fn.value);
        var sn = parseInt(document.myForm.sn.value);
        var mul = fn * sn;
        document.myForm.total.value = "Multiplication of values:";
        document.myForm.result.value = mul ;

      }
      function div() {
        var fn = parseInt(document.myForm.fn.value);
        var sn = parseInt(document.myForm.sn.value);
        var div = fn / sn;
        document.myForm.total.value = "Division of values:";
        document.myForm.result.value = div ;

      }
      function mod() {
        var fn = parseInt(document.myForm.fn.value);
        var sn = parseInt(document.myForm.sn.value);
        var mod = fn % sn;
        document.myForm.total.value = "Modulus of values:";
        document.myForm.result.value = mod ;

      }
      function myfun() {
        let x = document.getElementById("first").value;
        if(x!==""){
            document.getElementById("text").innerHTML="";
           
        }
    }
    function myfun1() {
        let y = document.getElementById("second").value;
        if(y!==""){
            document.getElementById("text2").innerHTML="";
           
        }
    }

    return (
        <div>
            <Form name="myForm" onSubmit={validateForm} >
                <div className='row'>
                    <div className="col-6">
                        <label><b>First Number : </b></label><br />
                        <input type="text" className='box' id="first" name="fn"  onMouseOut={myfun}/><br />
                        <strong>
                            <span id="text"></span>
                        </strong>
                    </div>
                
                    <div className="col-6">
                        <label><b>Second Number : </b></label><br />
                        <input type="text" className='box' id="second" name="sn" onMouseOut={myfun1} /><br />
                        <strong>
                            <span id="text2"></span>
                        </strong>
                    </div>
                </div>

                <div>
                    <input className='btn bg-primary text-white m-1' type="button" value="Addition" name="submit" onClick={add} />
                    <input className='btn bg-primary text-white m-1' type="button" value="Substraction" name="submit" onClick={sub} />
                    <input className='btn bg-primary text-white m-1' type="button" value="Multiplication" name="submit" onClick={mul} />
                    <input className='btn bg-primary text-white m-1' type="button" value="Division" name="submit" onClick={div} />
                    <input className='btn bg-primary text-white m-1' type="button" value="Modulus" name="submit" onClick={mod} />
                </div>
                <div>
                    <center>
                    <input type="submit" className='btn btn-success'  name="total"  /><br /><br /> 
                    <b> Result: </b> <br />
                    <input type="" className='btn border'  name="result"  />
                    </center>
                   
                </div>
            </Form>
        </div>
    );
    
};