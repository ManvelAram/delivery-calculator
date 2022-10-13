/*
'inpst' - (mi kilo araqume minchev 10 kg arji  1$, 10 kiloic avel arji 50 cent, mi kilometre 0,2 $ )
 jamanak - ete minjev 10 kg mi or, 10 -100 kg 2 0r, 100 kg avel amen 100 kg + mior, minchev 1000 km 3 or, 1000 km ic avel amen 100 km + 1 or; 
'hypst' - (mi kilo araqume arji  0.8$, mi kilometre minchev 100 km 0,2 $, 100 km ic heto 0,1 $ )
jamanak - ete minjev 100 kg mi or, 100 barcr 2 0r, minchev 1000 km 3 or, 1000 km ic avel amen 100 km + 1 or;
 'dhl' - (mi kilo araqume arji  1.8$, mi kilometre minchev 100 km 0$, 100 km ic heto 0,5 $ )
 jamanak - ete minjev 10 kg mi or, 10 -100 kg 2 0r, 100 kg avel amen 100 kg + mior, minchev 500 km 2 or, 500 - 1000 km 3 or, 1000 avel amen 500 km 1 or;
 'fdx' - (mi kilo araqume minchev 30 kg arji  20$, 30 kgic heto amen kg 5$, mi kilometre minchev 100 km 0,2 $, 100 km ic heto 0,1 $ )
 jamanak - ete minjev 50 kg mi or, 50 -500 kg 2 0r, 500 kg avel amen 100 kg + mi or, minchev 1000 km 3 or, 1000 km ic avel amen 100 km + 1 or;
 'plskpst'  - (mi kilo araqume arji  0.8$, mi kilometre minchev 100 km 0,2 $, 100 km ic heto 0,1 $ minimal arjeqe 50$ )
 jamanak - ete minjev 20 kg mi or, 20 -200 kg 2 0r, 200 kg avel amen 100 kg + mior, minchev 1000 km 1 or, 1000 km ic avel amen 1000 km + 1 or, minimum 5 or;
*/

let couriers = ['inpst', 'hypst', 'dhl', 'fdx', 'plskpst'];
function calculate(event) {
  const weight = event.target[0].value;
  const distance = event.target[1].value;
  let price = document.getElementById("price");
  let time = document.getElementById("time");
  let courier = '';
  for (let i = 2; i <= 6; i++){
    if (event.target[i].checked) {
      courier = couriers[i-2];
      break;
    }
  }
  let priceTotal = 0;
  let timeTotal = 0;

  switch (courier) {
    case 'inpst':
      if (weight <= 10){
        timeTotal = 1;
      } else if (weight > 10 && weight <= 100) {
        timeTotal = 2;
      } else if (weight > 100){
        standartWeight = 100;
        overWeight = weight - standartWeight
        timeTotal = 2 + Math.ceil(overWeight / standartWeight);
      }
      timeTotal += 3;
      if (distance > 1000) {
        let standartDistance = 1000;
        let overDistance = distance - standartDistance;
        timeTotal += Math.ceil(overDistance / 100); 
      } 
        
      if (weight <= 10){
        priceTotal = (weight * 1) + (distance * 0.2);
      } else if (weight > 10){
        let standartPrice = 1;
        let overPrice = weight - 10;
        priceTotal = (standartPrice * 1) + (overPrice * 0.5) + (distance * 0.2);
        
      }
      break;

    case 'hypst':
      if (weight <= 100) {
        timeTotal = 1;
        } else if (weight > 100 ) {
          timeTotal = 2;
        } 
  
      timeTotal += 3;
      if (distance > 1000) {
        let standartDistance = 1000;
        let overDistance = distance - standartDistance;
        timeTotal += Math.ceil(overDistance / 100);
      } 
          
      if (distance <=100) {
        priceTotal = (distance * 0.2) + (weight * 0.8);
      } else if (distance > 100) {
        let standartDistance = 100 * 0.2;
        let overDistance = distance - 100;
        priceTotal = standartDistance + (overDistance * 0.1) + (weight * 0.8);
      }
      break; 

    case 'dhl':
      if (weight <= 10) {
        timeTotal = 1;
      } else if (weight > 10 && weight <= 100) {
        timeTotal = 2;
      } else if (weight > 100) {
        let standartWeight = 100;
        let overWeight = weight - standartWeight;
        timeTotal = 2 + Math.ceil(overWeight/standartWeight);
      }
      
    timeTotal += 2;
    if (distance > 500) {
        let pointDistance = 500
        let overDistance = distance - pointDistance;
        timeTotal += Math.ceil(overDistance / pointDistance);
      }

    if (distance <=100) {
        priceTotal = weight * 1.8;
      } else if (distance > 100) {
        let standartDistance = 0;
        let overDistance = distance - 100;
        priceTotal = standartDistance + (overDistance * 0.5) + (weight * 1.8);
      }
      break;  

    case 'fdx':
      if (weight <= 50){
        timeTotal = 1;
      } else if (weight <= 500){
        timeTotal = 2;
      } else if (weight > 500){
        standartWeight = 500;
        overWeight = weight - standartWeight;
        let pointWeight = 100
        timeTotal = 2 + Math.ceil(overWeight / pointWeight); 
      }
      
      timeTotal += 3;
      if (distance > 1000){
        let standartDistance = 1000;
        let overDistance = distance - standartDistance;
        timeTotal += Math.ceil(overDistance / 100);
      }
      
      if (weight <= 30 || distance <= 100) {
        priceTotal = 20 + (distance * 0.2);
      } else if (weight > 30 || distance > 100) {
        let standartWeight = 20;
        let overWeight = (weight - 30) * 5;
        let standartDistance = 20;
        let overDistance = (distance - 100) * 0.1;
        priceTotal = standartWeight + overWeight + standartDistance + overDistance;
      }
      break; 

    case 'plskpst':
      if (weight <= 20){
        timeTotal = 1;
      } else {
        timeTotal = 2;
        if (weight > 200) {
          standartWeight = 200;
          overWeight = weight - standartWeight;
          pointWeight = 100;
          timeTotal += Math.ceil(overWeight / pointWeight);
        }
      }
      timeTotal += 1;
      if (distance > 1000){
        standartDistance = 1000;
        overDistance = distance - standartDistance;
        timeTotal += Math.ceil(overDistance / standartDistance);
      }
      if (timeTotal < 5) {
        timeTotal = 5;
      }
  
      if (distance <= 100 ) {
        priceTotal = (weight * 0.8) + (distance * 0.2);
      } else if (distance > 100) {
        let standartDistance = 20;
        let overDistance = (distance - 100) * 0.1;
        priceTotal = (weight * 0.8) + standartDistance + overDistance;
      }
      if (priceTotal < 50) {
        priceTotal = 50;
      } 
    
      break;       
  
    }
    price.innerHTML = priceTotal;
    time.innerHTML = timeTotal;
    console.log(weight, distance, courier, price, time);
  }

