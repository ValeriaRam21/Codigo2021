<script>  
  //Segundo programa: Leer 10 calificaciones, mostrar el promedio y las calificaciones mayores al promedio
  //Ramirez Gonzalez Valeria
  
  
  let calificaciones=[];
  let califimayores=[];
  
	for(let i=0;i<10;i++){
    let leer=parseFloat(prompt("Introduce las calificaciones"+(i+1)));
    calificaciones.push(leer);
  }
  
  let suma=0;
  let promedio;
  for(let i=0;i<10;i++){
   suma+=calificaciones[i];
   }
   promedio=suma/10;
  for(let i=0;i<10;i++){
   if(promedio<=calificaciones[i]){
       califimayores.push(calificaciones[i]);}
  }
  document.write("<br>Su promedio es "+promedio+"<br> Calificaciones mayores: "+califimayores);
  
  
</script>



