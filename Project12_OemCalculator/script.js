//Storage Controller
const StorageController=(function(){
    return{
        sendtoLSforAdd:function(product){
            let products;
            if(localStorage.getItem('products')==null){
                products=[];
                products.push(product);
              
            }else{
                products=JSON.parse(localStorage.getItem('products'));
                products.push(product);
            }
            localStorage.setItem('products',JSON.stringify(products));
        },
        getProductsFromLS:function(){
            let products;
            if(localStorage.getItem('products')==null){
                products=[];
              
            }else{
                products=JSON.parse(localStorage.getItem('products'));
            }
            console.log(products);
            return products;
        },
        updateDataAtLS:function(product){
            let products=JSON.parse(localStorage.getItem('products'));
            products.forEach((item,index)=>{
                if(item.id==product.id){
                    products.splice(index,1,product)
                   
                }
            })
            localStorage.setItem('products',JSON.stringify(products));
        },
        deleteDataAtLS:function(product){
            let products=JSON.parse(localStorage.getItem('products'));
            products.forEach((item,index)=>{
                if(item.id==product.id){
                    products.splice(index,1);
                   
                }
            })
            localStorage.setItem('products',JSON.stringify(products));
        }
    }
})();
//Product Controller
const ProductController=(function(){

    const Product= function(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }
    const data = {
        products:StorageController.getProductsFromLS(),
        selectedData:null,
        totalPrice:0
    }
    return{
        getData:function(){
            return data;
        },
        getProducts:function(){
            return data.products;
        },
        addProduct:function(name,price){
            let id;
            
            if(data.products.length>0){
                id=data.products[data.products.length-1].id+1;
            }else{
                id=1;
            }
            const newObject= new Product(id,name,parseFloat(price));
            data.products.push(newObject);
            return newObject;
        },
        calculateTotalUSD:function(){
            let total=0;
            data.products.forEach(item=>{
                total+=item.price;
            });
            return total;
        },
        turntoTRY:async function(usd){
            const response = await fetch("https://api.frankfurter.app/latest?amount=1&from=USD&to=TRY");
            const data = await response.json();
            const rate = data.rates.TRY;
            const totalTRY = usd * rate;
            document.querySelector(".totalNumberTRY").innerText=`${totalTRY.toFixed(2)} ₺`
        },
        getItemById:function(id){
            let product=null;
            data.products.forEach(item=>{
                if(item.id==id){
                    product=item;
                }
            })
            return product;
        },
        selectProduct:function(product){
            data.selectedData=product;
        },
        getSelectedProduct:function(){
            return data.selectedData;
        },
        updateData:function(){
            const name=document.querySelector(UIController.getSelecters().productName);
            const price=document.querySelector(UIController.getSelecters().price);
            
            let product=null;

            data.products.forEach(item=>{
                if(item.id===data.selectedData.id){
                    item.name=name.value;
                    item.price=parseFloat(price.value);
                    product=item;
                }
            })
            return product;
           
        },
        deleteData:function(product){
          
            data.products.forEach((item,index)=>{
                if(item.id==product.id){
                   data.products.splice(index,1);
                }
            })
        }

    }
})();

//UI Controller

const UIController=(function(){
    const Selecters={
        productList:"tbody",
        productName:"#productName",
        price:"#price",
        addBtn:".add",
        saveBtn:".save",
        deleteBtn:".delete",
        cancelBtn:".cancel",
        productBox: "#productBox",
        infoBox:".info",
        totalUSD:".totalNumberUSD",
        totalTRY:".totalNumberTRY",
        listItems:"tbody tr"
    }

    addtoProductUI=function(products){
        for(let product of products){
            let productHtml=`
                <tr class="">
                    <td class="border i amount ">${product.id}</td>
                    <td class="border i name ">${product.name}</td>
                    <td class="border i price ">${product.price} $</td>
                    <td class="border  i text-end "><i class="bi bi-pin-angle-fill"></i></td>
                </tr> `
            document.querySelector(Selecters.productList).insertAdjacentHTML("beforeend",productHtml);
        }
    }

    getSelecters=function(){
       return Selecters;  
    }

    addNewProduct=function(product){
        let prtHtml=`
            <tr class="">
                <td class="border i amount ">${product.id}</td>
                <td class="border i name ">${product.name}</td>
                <td class="border i price ">${product.price} $</td>
                <td class="border i text-end "><i class="bi bi-pin-angle-fill"></i></td>
            </tr> `
        document.querySelector(Selecters.productList).insertAdjacentHTML("beforeend",prtHtml);
    }
    clearTexts= function(){
        document.querySelector(Selecters.productName).value="";
        document.querySelector(Selecters.price).value="";
    }

    isOpenList=function(){
        const box=document.querySelector(Selecters.productBox);
        const info=document.querySelector(Selecters.infoBox);
        if(!box.classList.contains("d-none")){
            box.classList.add("d-none");
            info.classList.add("d-none");
        }else{
            box.classList.remove("d-none");
            info.classList.remove("d-none");
        }
    }

    showTotals=function(USD){
        document.querySelector(Selecters.totalUSD).innerText=`${USD} $`;
    }

    addProductToForm=function(product){
        document.querySelector(Selecters.productName).value=product.name;
        document.querySelector(Selecters.price).value=product.price;
    }

    openAddMode=function(){
        document.querySelector(Selecters.addBtn).classList.remove("d-none");
        document.querySelector(Selecters.saveBtn).classList.add("d-none");
        document.querySelector(Selecters.deleteBtn).classList.add("d-none");
        document.querySelector(Selecters.cancelBtn).classList.add("d-none");
    }

    openEditMode=function(element){
        document.querySelector(Selecters.addBtn).classList.add("d-none");
        document.querySelector(Selecters.saveBtn).classList.remove("d-none");
        document.querySelector(Selecters.deleteBtn).classList.remove("d-none");
        document.querySelector(Selecters.cancelBtn).classList.remove("d-none");
        
        const childrens=element.children;
        
        document.querySelectorAll(".i").forEach(item=>{
            if(item.classList.contains("bg-danger")){
                item.classList.remove("bg-danger");
                item.parentElement.classList.remove("selectedElement");
            }
        })
        element.classList.add("selectedElement");

        for(let i=0;i<childrens.length;i++){
            childrens[i].classList.add("bg-danger");
        }
    }
    
    updateForUI=function(product){
        document.querySelectorAll(Selecters.listItems).forEach(element=>{
            if(element.classList.contains("selectedElement")){
               element.children[1].innerText=product.name;
               element.children[2].innerText=product.price+" $";
               openAddMode();
               element.classList.remove("selectedElement");
               document.querySelectorAll(".i").forEach(e=>{e.classList.remove("bg-danger")});
               document.querySelector(Selecters.productName).value="";
               document.querySelector(Selecters.price).value="";
            }
        })
    }

    cancelUpdate=function(){
        document.querySelectorAll(".i").forEach(item=>{
            if(item.classList.contains("bg-danger")){
                item.classList.remove("bg-danger");
                item.parentElement.classList.remove("selectedElement");
            }
        })
        openAddMode();
        document.querySelector(Selecters.productName).value="";
        document.querySelector(Selecters.price).value="";
    }
    deleteFromUI=function(){
        document.querySelectorAll(Selecters.listItems).forEach(item=>{
            if(item.classList.contains("selectedElement")){
                item.remove();
                
            }
        })
        const products=ProductController.getProducts();
        if(products.length<=0){
            document.querySelector(Selecters.infoBox).classList.add("d-none");
            document.querySelector(Selecters.productBox).classList.add("d-none");
        }
        openAddMode();
    }
    return {
        addtoProductUI,
        getSelecters,
        addNewProduct,
        clearTexts,
        isOpenList,
        showTotals,
        addProductToForm,
        openAddMode,
        openEditMode,
        updateForUI,
        cancelUpdate,
        deleteFromUI

    }
})();
//APP Contoller

const APPController=(function(StorageCtrl,ProductCtrl,UICtrl){
    const UIselecters=UICtrl.getSelecters();
    loadEvents=function(){
        document.querySelector(UIselecters.addBtn).addEventListener("click",function(){

            document.querySelector(UICtrl.getSelecters().productBox).classList.remove("d-none");
            document.querySelector(UICtrl.getSelecters().infoBox).classList.remove("d-none");

            let name=document.querySelector(UIselecters.productName).value;
            let price=document.querySelector(UIselecters.price).value;

            if(name !=="" && price!=="" && price>=0){
                
                const product=ProductCtrl.addProduct(name,price);
                UICtrl.addNewProduct(product);
                StorageCtrl.sendtoLSforAdd(product);
                UICtrl.clearTexts();

                const totalusd=ProductCtrl.calculateTotalUSD();
                ProductCtrl.turntoTRY(totalusd);
                UICtrl.showTotals(totalusd);
            }

        })

        document.querySelector(UIselecters.productList).addEventListener("click",function(e){
            if(e.target.classList.contains("bi-pin-angle-fill")){

                UICtrl.openEditMode(e.target.parentElement.parentElement);

                const id = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
                console.log(id);
                const element=ProductCtrl.getItemById(id);
                ProductCtrl.selectProduct(element);
                UICtrl.addProductToForm(element);


            }
        })

        document.querySelector(UIselecters.saveBtn).addEventListener("click",function(){
            let name=document.querySelector(UIselecters.productName).value;
            let price=document.querySelector(UIselecters.price).value;

            if(name !=="" && price!=="" && price>=0){
                
                let product=ProductCtrl.updateData();
                updateForUI(product);
                StorageCtrl.updateDataAtLS(product);
                

                const totalusd=ProductCtrl.calculateTotalUSD();
                ProductCtrl.turntoTRY(totalusd);
                UICtrl.showTotals(totalusd);
            }
        })
        document.querySelector(UIselecters.cancelBtn).addEventListener("click",function(){
            UICtrl.cancelUpdate();
        })

        document.querySelector(UIselecters.deleteBtn).addEventListener("click",function(){
            const product=ProductCtrl.getData().selectedData;
            ProductCtrl.deleteData(product);
            UICtrl.deleteFromUI();
            StorageCtrl.deleteDataAtLS(product);
            
            const totalusd=ProductCtrl.calculateTotalUSD();
            ProductCtrl.turntoTRY(totalusd);
            UICtrl.showTotals(totalusd);
            
        })
    }

    return{
        init:function(){
            UICtrl.clearTexts();
            UICtrl.openAddMode();
            if(ProductCtrl.getProducts().length<=0){
                UICtrl.isOpenList();
            }
            console.log("The program has been started");
            const products=ProductCtrl.getProducts();
            UICtrl.addtoProductUI(products);

            const totalusd=ProductCtrl.calculateTotalUSD();
            ProductCtrl.turntoTRY(totalusd);
            UICtrl.showTotals(totalusd);
            
        
            loadEvents();
        },   
    }
})(StorageController,ProductController,UIController);

APPController.init();