let Personas =[];
    const addPersona = (ev)=>{
        ev.preventDefault();
            var Nombre = document.getElementById("Nombre").value;
            var Año=document.getElementById("Año").value;
            document.querySelector("form").reset();
            
            let pre = document.querySelector("#mensaje #test");
            let pre2 = document.querySelector("#mensaje #test2");
            pre.textContent = JSON.stringify(Nombre);
            pre2.textContent = JSON.stringify(Año);
        }
            document.addEventListener("DOMContentLoaded",()=>{
            document.getElementById("Boton").addEventListener("click", addPersona);
            });
            /* let Persona = {
            id:Date.now(),
            title:document.getElementById("Nombre").value,
            year: document.getElementById("Año").value
        }
            <div class="gridContainer">
                <button class="especialidades"><a href="file:///E:/html/Proyecto%20Heithel/especilidades.html">Especialidades</a> </button>
                <div class="grid1">Espacio</div>
                <div class="grid2"><h3>Mision y vision</h3></div>
                <div class="grid3"><p>El colegio Mario Quiros Sasso es el mejor del planeta lo amo mucho y quiero que sea exitoso </p></div>
            </div>
        </div>
    </body>
</html>
        
        
        
        
        */