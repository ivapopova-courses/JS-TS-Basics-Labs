let bodyWeight = 80;
let bodyHeight = 1.70 ;
let bodyMassIndex = bodyWeight / bodyHeight**2 ;

console.log( "Your BMI is: " + bodyMassIndex );


if (bodyMassIndex < 16.0 ){
    console.log( Underweight - Severe );
}else if ( bodyMassIndex>16.0 && bodyMassIndex<16.9){
    console.log( Underweight - Moderate );
}else if ( bodyMassIndex>17.0 && bodyMassIndex<18.4){
    console.log( Underweight - Mild );
}else if ( bodyMassIndex>18.5 && bodyMassIndex<24.9){
    console.log( Normal );
}else if ( bodyMassIndex>25.0 && bodyMassIndex<29.9){
    console.log( Overweight - Pre-obese );
}else if ( bodyMassIndex>30.0 && bodyMassIndex<34.9){
    console.log( Obese - Class1 );
}else if ( bodyMassIndex>35.0 && bodyMassIndex<39.9){
    console.log( Obese - Class2 );
}else {
    console.log( Obese - Class3 );
}