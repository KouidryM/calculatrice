function btm(val){
document.getElementById("calc-output").innerText+= val;
}
function btmClean(){
    document.getElementById("calc-output").innerText="";
}
    function btmPlus(){
        document.getElementById("calc-output").innerText+="+";
        }
        function btmLess(){
            document.getElementById("calc-output").innerText+="-";
            }
            function btmMultiply(){
                document.getElementById("calc-output").innerText+="*";
                }
                function btmDivision(){
                    document.getElementById("calc-output").innerText+="/";
                    
                    }
                    function btmEgal(){
                        var egal=eval(document.getElementById("calc-output").innerText);
                        document.getElementById("calc-output").innerText=egal;
                        }