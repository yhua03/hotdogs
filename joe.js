function get(){

var subtotal,discount,tax,disctotal,total,after_tax,final_total;

var h=document.getElementById("hotdogs").value;
var f=document.getElementById("fries").value;
var s=document.getElementById("sodas").value;

var hotdogs=parseFloat(h);
var fries=parseFloat(f);
var sodas=parseFloat(s);


subtotal=(hotdogs*3.25+fries*2.00+sodas*1.50);

if(subtotal >= 20){
  discount=subtotal*0.1;
  discount=discount.toFixed(2);
  disctotal=subtotal*0.9;
}else{
  disctotal = subtotal;
}

tax=disctotal*0.0625;
total=disctotal*1.0625;
final_total=total.toFixed(2);


var print="YOU ORDERED: "+h+" hotdogs, "+f+" french fries and "+s+ " sodas " + "\n";

if(subtotal<=0){
  print+="YOU HAVEN'T PLACED AN ORDER YET!"+ "\n";
}else {
  print+="YOUR SUBTOTAL BEFORE TAX AND DISCOUNT IS : "+subtotal+"\n";
}
if(discount>0){
  print+="YOU SAVED "+ discount+ " DOLLARS TODAY!"+ "\n";
}else {
  print+="YOU NEED TO SPEND $20 OR MORE TO GET A DISCOUNT:("+ "\n";
}
if(tax>0){
print+="TAX: $"+ tax+ "\n";
}
print+="YOUR TOTAL AFTER TAX AND DISCOUNT IS: "+final_total+ "DOLLARS!"+ "\n";

alert(print);
}