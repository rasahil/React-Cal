import Form from 'react-bootstrap/Form';

function Input2() {

    function add() {

        var fn = parseInt(document.forms["myForm"]["fn"].value);
        var sn = parseInt(document.forms["myForm"]["sn"].value);
        var sum = fn + sn;
        var sub = fn - sn;
        var mul = fn * sn;
        var div = fn / sn;
        var mod = fn % sn;


        // Validation;
        let x = document.getElementById("fn").value;
        if (x === "") {                                //for blank  Value
            document.getElementById("first").innerHTML = "Please enter a value";
            return false;
        }
        else if (isNaN(x)) {                   //for string Value
            document.getElementById("first").innerHTML = "Please enter numeric value";
            return false;
        }
        let y = document.getElementById("sn").value;
        if (y === "") {                                //for blank  Value
            document.getElementById("second").innerHTML = "Please enter a value";
            return false;
        }
        else if (isNaN(y)) {                   //for string Value
            document.getElementById("second").innerHTML = "Please enter numeric value";
            return false;
        }
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("sub").innerHTML = sub;
        document.getElementById("mul").innerHTML = mul;
        document.getElementById("div").innerHTML = div;
        document.getElementById("mod").innerHTML = mod;
    }
    function myfun() {
        let x = document.getElementById("fn").value;
        if (x !== "") {
            document.getElementById("first").innerHTML = "";
            return false;
        }
    }
    function myfun1() {
        let y = document.getElementById("sn").value;
        if (y !== "") {
            document.getElementById("second").innerHTML = "";
            return false;
        }
    }

    return (
        <div>
            <Form name="myForm" >
                <label>First Number :</label>
                <input type="text" name="fn" id="fn" onMouseOut={myfun()} />
                <p id="first"></p>
                <label>Second Number :</label>
                <input type="text" name="sn" id="sn" onMouseOut={myfun1()} />
                <p id="second" ></p>
                <input type="button" value="result" onClick={add()} />

            </Form>
            <span>Addition :</span> <span id="sum"></span>
            <span>Substraction :</span> <span id="sub"></span>
            <span>Multiplication :</span> <span id="mul"></span>
            <span>Division :</span> <span id="div"></span>
            <span>Modulus :</span> <span id="mod"></span>

        </div>
    );
}

export default Input2;