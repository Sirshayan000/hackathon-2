
export default function HOomePage(){
  return(
    <div className="body h-[8479px] w-[1920px] bg-[#0d0d0d]">
        
        {/* header */}
        <div className="h-[950px] w-[1920px]  ">

      
      {/* nav */}
          <div className="h-[87spx] w-[1320px] flex justify-between ml-auto mr-auto mt-[100px]">
               
              
             {/* div-1-sections */}
            <div className="h-[24px] w-[508px] text-[#ffffff] flex justify-between items-center text-base">
               <div className="mt-2">
                  <a className="">Home</a>
                  <div className="h-[7px] w-[7px] bg-[url('/images/orange-dot.png')] bg-cover ml-auto mr-auto"></div>
               </div>
               <a>Menu</a>
               <a>Blog</a>
               <a>Pages</a>
               <div className="flex justify-between items-center">
                  <a>About</a>
                  <div className="h-[14px] w-[14px] bg-[url('/images/drop-icon.png')] bg-cover ml-auto mr-auto"></div>
               </div>
               <a>Shop</a>
               <a>Contact</a>

            </div>

              {/* div-2-logo */}
             <div className="h-[32px] w-[109px] font-bold text-2xl mt-[-45px] mr-[250px]">
               <h1>Food
                 <span className="text-[#FF9F0D]">tuck</span>
               </h1>   
             </div> 

             

             {/* div-3-icons */}
            <div className="h-[54px] w-[350px] flex justify-between items-center">
                <div className="h-[54px] w-[310px] border border-[#FF9F0D] rounded-[27px] flex justify-evenly items-center">
                  <input className="bg-[#0d0d0d] ml-[15px] text-[#ffffff]" type="text" placeholder="Search..." />
                  <div className="h-[24px] w-[24px] mr-[15px] bg-[url('/images/magni.png')] bg-cover"></div>
                </div>
                <div className="h-[24px] w-[24px] bg-[url('/images/shop.png')] bg-cover"></div>

            </div>

             {/* nav */}
          </div>
       
       {/* below-the-nav */}
       <div className="flex ">
       {/* div-1 */}
         <div className="ml-[245px] mt-[100px] h-[492px] w-[520px] flex justify-between items-center ">
             <div className="h-[492px] w-[25.28px] 
                 bg-[url('/images/social-acc.png')] bg-cover">
             </div>

             <div className="h-[356px] w-[472px] ">
                <div className="h-[40px] w-[249px]
                   bg-[url('/images/cur-writing.png')] bg-cover">
                </div>
                <h1 className="h-[136px] w-[499px] font-bold text-[60px]">
                  <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
                </h1>
                <p className="h-[48px] w-[418px] mt-[70px] font-normal text-[16px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue
                </p>
                <button className=" mt-[70px] h-[60px] w-[190px] bg-[#ff9d0d] rounded-[27px]">
                  See Menu
                </button>

             </div>

         </div>

         {/* div-2 */}
         <div className="h-[670px] w-[877.7px] mt-[150px] ml-[200px]
                 bg-[url('/images/hero-img.png')] bg-cover">
         </div>

         {/* below */}
      </div>

          {/* header */}
        </div>
{/* 
-------------------------------------------------------------------------------------------------
        container-2 -food-products */}
        
      <div className="h-[562px] w-[1320px] flex justify-between ml-[295px] mt-[300px]">

          {/* div-1 */}
          <div className="h-[562px] w-[562px]">

              <div className="h-[40px] w-[91px] bg-[url('/images/cur-writing-2.png')] bg-cover"></div>
              <h1 className="h-[136px] w-[499px] font-bold text-[48px]">
                  <span className="text-[#FF9F0D]">We</span>Create the best foody product
              </h1>      
              <p className="h-[48px] w-[526px] mt-[50px] font-normal text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>

              <div className="h-[18px] w-[526px] mt-[100px] flex items-center font-normal text-[18px]">
                  <div className="h-[12.24px] w-[17px] bg-[url('/images/tick.png')] bg-cover"> </div> 
                  <p className="ml-[10px]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              </div>      
              
              <div className="h-[18px] w-[566px] mt-[40px] flex items-center font-normal text-[18px]">
                  <div className="h-[12.24px] w-[17px] bg-[url('/images/tick.png')] bg-cover"> </div> 
                  <p className="ml-[10px]"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
              </div>  

              <div className="h-[18px] w-[526px] mt-[40px] flex items-center  font-normal text-[18px]">
                  <div className="h-[12.24px] w-[17px] bg-[url('/images/tick.png')] bg-cover"> </div> 
                  <p className="ml-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>  

              <button className=" mt-[40px] h-[60px] w-[190px] bg-[#ff9d0d] rounded-[27px]">
                  Read More
               </button>
              
          </div>

          {/* div-2 */}
          <div className="h-[526px] w-[660px]">

             <div className="h-[330px] w-[660px] bg-[url('/images/food-pro-1.png')] bg-cover"></div>
 
             <div className="h-[194px] w-[660px] flex justify-between mt-[20px]">
               <div className="h-[194px] w-[322px] bg-[url('/images/food-pro-2.png')] bg-cover"></div>   
               <div className="h-[194px] w-[322px] bg-[url('/images/food-pro-3.png')] bg-cover"></div>
            </div>

          </div>

      </div>

{/* 
-------------------------------------------------------------------------------------------------
        container-3 -food-items */}
      <div className="h-[489px] w-[1320px]  mt-[200px] ml-auto mr-auto">
                {/* div-1 */}
          <div className="h-[40px] w-[177px] bg-[url('/images/cur-writing-3.png')] bg-cover ml-auto mr-auto"></div>
          <h1 className="h-[56px] w-[496px] font-bold text-[48px] ml-auto mr-auto">
                  <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
          </h1>

                {/* div-2 */}
          <div className="h-[329px] w-[1320px] flex justify-between mt-[65px]">
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-1.png')] bg-cover">
                 <div className="h-[97px] w-[206px] bg-[url('/images/dis-food-it.png')] bg-cover mt-[110px]"></div>
             </div>
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-2.png')] bg-cover"></div>
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-3.png')] bg-cover"></div>
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-4.png')] bg-cover"></div>

          </div>

      </div>

 {/* 
-------------------------------------------------------------------------------------------------
        container-4 -food-items-tastes */}

      <div className="h-[562px] w-[1320px] flex justify-between ml-[295px] mt-[300px]">

         
          {/* div-1 */}
        <div>
              {/* box-1 */}
          <div className="h-[356px] w-[660px] flex justify-between ">
             <div className="h-[356px] w-[362px] bg-[url('/images/food-tas-1.png')] bg-cover"></div>
             <div className="h-[231px] w-[281px] bg-[url('/images/food-tas-2.png')] bg-cover mt-[126px]"></div>
          </div>
               {/* box-2 */}
          <div className="h-[356px] w-[660px] flex justify-between  mt-[30px]">

             <div className="h-[306px] w-[244px] bg-[url('/images/food-tas-3.png')] bg-cover"></div>
             <div className="h-[226px] w-[221px] bg-[url('/images/food-tas-4.png')] bg-cover"></div>
             <div className="h-[px] w-[161px]">
               <div className="h-[166px] w-[161px] bg-[url('/images/food-tas-5.png')] bg-cover"></div>
               <div className="h-[166px] w-[161px] bg-[url('/images/food-tas-6.png')] bg-cover mt-[20px]"></div>
             </div>
              
          </div>
        </div>

           {/* div-2 */}
          <div className="h-[650px] w-[562px] mt-[50px]">

              <div className="h-[40px] w-[175px] bg-[url('/images/cur-writing-4.png')] bg-cover"></div>
              <h1 className="h-[112px] w-[473px] font-bold text-[48px]">
                  <span className="text-[#FF9F0D]">Ex</span>ta ordinary taste And Experienced 
              </h1>      
              <p className="h-[120px] w-[526px] mt-[50px] font-normal text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.              
              </p>
                 
             <div className="h-[135px] w-[374px] mt-[50px] flex justify-between">
                <div>
                  <div className="h-[100px] w-[102px] bg-[#ff9f0d] rounded-md pl-[20px] pt-[20px]">
                      <div className="h-[56px] w-[56px] bg-[url('/images/taste-1.png')] bg-cover"></div>
                  </div>
                  <p className="font-normal text-[18px] text-center mt-[10px]">Fast Food</p>
                </div>

                <div>
                  <div className="h-[100px] w-[102px] bg-[#ff9f0d] rounded-md pl-[20px] pt-[20px]">
                      <div className="h-[56px] w-[56px] bg-[url('/images/taste-2.png')] bg-cover"></div>
                  </div>
                  <p className="font-normal text-[18px] text-center mt-[10px]">Lanuch</p>
                </div>

                <div>
                  <div className="h-[100px] w-[102px] bg-[#ff9f0d] rounded-md pl-[20px] pt-[20px]">
                      <div className="h-[56px] w-[56px] bg-[url('/images/taste-3.png')] bg-cover"></div>
                  </div>
                  <p className="font-normal text-[18px] text-center mt-[10px]">Dinner</p>
                </div>
             </div>

             <div className="h-[93px] w-[374px] mt-[50px]
                bg-[url('/images/taste-exp.png')] bg-cover">
             </div>
              {/* div-2 */}
          </div>


      </div>

 
 {/* 
-------------------------------------------------------------------------------------------------
        container-5- services
*/}

   <div className="h-[469px] w-[1920px] mt-[600px]">
       
       <div className="h-[247px] w-[1320px] ml-auto mr-auto flex justify-between">
              {/* box-1 */}
           <div className="h-[247px] w-[218px]">
              <div className="h-[124px] w-[124px] bg-[url('/images/exp-logo-1.png')] bg-cover"></div>
              <p className="font-normal text-[24px]">Professional Chefs</p>
              <h2 className="font-bold text-[40px]">420</h2>
 
           </div>
          
           {/* box-2 */}
           <div className="h-[247px] w-[162px]">
              <div className="h-[124px] w-[124px] bg-[url('/images/exp-logo-2.png')] bg-cover"></div>
              <p className="font-normal text-[24px]">Items Of Food</p>
              <h2 className="font-bold text-[40px]">320</h2>
 
           </div> 

           {/* box-3 */}
           <div className="h-[247px] w-[248px]">
              <div className="h-[124px] w-[124px] bg-[url('/images/exp-logo-3.png')] bg-cover"></div>
              <p className="font-normal text-[24px]">Years Of Experienced</p>
              <h2 className="font-bold text-[40px]">30+</h2>
 
           </div>

           {/* box-4 */}
           <div className="h-[247px] w-[206px]">
              <div className="h-[124px] w-[124px] bg-[url('/images/exp-logo-4.png')] bg-cover"></div>
              <p className="font-normal text-[24px]">Happy Customers</p>
              <h2 className="font-bold text-[40px]">220</h2>
 
           </div>


       </div>

   </div>


 {/* 
-------------------------------------------------------------------------------------------------
        container-5- Menu
*/}

   <div className="h-[656px] w-[1320px] mt-[200px] mr-auto ml-auto">
       <div className="h-[40px] w-[144px] mr-auto ml-auto
           bg-[url('/images/cur-writing-5.png')] bg-cover">
       </div>

       <h2 className="font-bold text-[48px] ml-[475px]">
        <span className="text-[#ff9f0d]">Fr</span>om Our Menu
       </h2>

       <div className="h-[28px] w-[1056px] flex justify-between items-center mt-[50px]">
         <a className="text-[#ff9f0d]">Breakfast</a>
         <a>Lunch</a>
         <a>Dinner</a>
         <a>Desert</a>
         <a>Drinks</a>
         <a>Snacks</a>
         <a>Soups</a>
       </div>

       <div className="w-[1320px] h-[406px] flex justify-between mt-[50px]">
          {/* box-1 */}
          <div className="w-[515px] h-[406px] bg-[url('/images/main-menu.png')] bg-cover">
                 <div className="w-[366px] h-[362px] bg-[url('/images/main-menu-sub.png')] bg-cover mt-[30px] ml-[50px]"></div>
          </div>

            {/* box-2 */}
          <div className="w-[386px] h-[406px] ">
                     {/* dabba-1 */}
               <div className="w-[386px] h-[79px] flex justify-between ">
                    <div className="w-[80px] h-[79px] bg-[url('/images/menu1.png')] bg-cover"></div>

                    <div className="h-[79px] w-[300px] font-bold ">
                       <h3 className="text-[28px]">Lettuce Leaf</h3>
                       <p className="text-[14px] font-normal">Lacus nisi, et ac dapibus velit in consequat.</p>
                       <h4 className="text-[18px] text-[#ff9f0d]">12.5$</h4>
                    </div>
               </div>

                   {/* dabba-2 */}
               <div className="w-[386px] h-[79px] flex justify-between mt-[25px]">
                    <div className="w-[80px] h-[79px] bg-[url('/images/menu2.png')] bg-cover"></div>

                    <div className="h-[79px] w-[300px] font-bold ">
                       <h3 className="text-[28px]">Fresh Breakfast</h3>
                       <p className="text-[14px] font-normal">Lacus nisi, et ac dapibus velit in consequat.</p>
                       <h4 className="text-[18px] text-[#ff9f0d]">14.5$</h4>
                    </div>
               </div>

                   {/* dabba-3 */}
               <div className="w-[386px] h-[79px] flex justify-between mt-[25px]">
                    <div className="w-[80px] h-[79px] bg-[url('/images/menu3.png')] bg-cover"></div>

                    <div className="h-[79px] w-[300px] font-bold ">
                       <h3 className="text-[28px]">Mild Butter</h3>
                       <p className="text-[14px] font-normal">Lacus nisi, et ac dapibus velit in consequat.</p>
                       <h4 className="text-[18px] text-[#ff9f0d]">12.5$</h4>
                    </div>
               </div>

                   {/* dabba-4 */}
               <div className="w-[386px] h-[79px] flex justify-between mt-[25px]">
                    <div className="w-[80px] h-[79px] bg-[url('/images/menu4.png')] bg-cover"></div>

                    <div className="h-[79px] w-[300px] font-bold ">
                       <h3 className="text-[28px]">Fresh Bread</h3>
                       <p className="text-[14px] font-normal">Lacus nisi, et ac dapibus velit in consequat.</p>
                       <h4 className="text-[18px] text-[#ff9f0d]">12.5$</h4>
                    </div>
               </div>
          </div>

            {/* box-3 */}
            <div className="w-[386px] h-[406px] ">
                     {/* dabba-1 */}
               <div className="w-[386px] h-[79px] flex justify-between ">
                    <div className="w-[80px] h-[79px] bg-[url('/images/menu5.png')] bg-cover"></div>

                    <div className="h-[79px] w-[300px] font-bold ">
                       <h3 className="text-[28px]">Glow Cheese</h3>
                       <p className="text-[14px] font-normal">Lacus nisi, et ac dapibus velit in consequat.</p>
                       <h4 className="text-[18px] text-[#ff9f0d]">12.5$</h4>
                    </div>
               </div>

                   {/* dabba-2 */}
               <div className="w-[386px] h-[79px] flex justify-between mt-[25px]">
                    <div className="w-[80px] h-[79px] bg-[url('/images/menu6.png')] bg-cover"></div>

                    <div className="h-[79px] w-[300px] font-bold ">
                       <h3 className="text-[28px]">Italian Pizza</h3>
                       <p className="text-[14px] font-normal">Lacus nisi, et ac dapibus velit in consequat.</p>
                       <h4 className="text-[18px] text-[#ff9f0d]">14.5$</h4>
                    </div>
               </div>

                   {/* dabba-3 */}
               <div className="w-[386px] h-[79px] flex justify-between mt-[25px]">
                    <div className="w-[80px] h-[79px] bg-[url('/images/menu7.png')] bg-cover"></div>

                    <div className="h-[79px] w-[300px] font-bold ">
                       <h3 className="text-[28px]">Sllice Beef</h3>
                       <p className="text-[14px] font-normal">Lacus nisi, et ac dapibus velit in consequat.</p>
                       <h4 className="text-[18px] text-[#ff9f0d]">12.5$</h4>
                    </div>
               </div>

                   {/* dabba-4 */}
               <div className="w-[386px] h-[79px] flex justify-between mt-[25px]">
                    <div className="w-[80px] h-[79px] bg-[url('/images/menu8.png')] bg-cover"></div>

                    <div className="h-[79px] w-[300px] font-bold ">
                       <h3 className="text-[28px]">Mushaom Pizza</h3>
                       <p className="text-[14px] font-normal">Lacus nisi, et ac dapibus velit in consequat.</p>
                       <h4 className="text-[18px] text-[#ff9f0d]">12.5$</h4>
                    </div>
               </div>
          </div>
       </div>

   </div>

 {/* 
-------------------------------------------------------------------------------------------------
        container-6- cheifs
*/}

    <div className="h-[656px] w-[1320px] mt-[200px] mr-auto ml-auto">
        <div className="h-[40px] w-[56px] mr-auto ml-auto 
            bg-[url('/images/cur-writing-6.png')] bg-cover">
        </div>

        <h2 className="font-bold text-[48px] ml-[475px]">
          <span className="text-[#ff9f0d]">Me</span>et Our Chef
        </h2>       

        <div className="h-[391px] w-[1320px] flex justify-between mt-[65px]">
             <div className="h-[391px] w-[312px] bg-[url('/images/chef-1.png')] bg-cover"></div>
             <div className="h-[391px] w-[312px] bg-[url('/images/chef-2.png')] bg-cover"></div>
             <div className="h-[391px] w-[312px] bg-[url('/images/chef-3.png')] bg-cover"></div>
             <div className="h-[391px] w-[312px] bg-[url('/images/chef-4.png')] bg-cover"></div>
         </div>

    </div>

 {/* 
-------------------------------------------------------------------------------------------------
        container-7- cutomer expre
*/}

<div className="h-[770px] w-[1273px] mt-[200px] mr-auto ml-auto">
    
    <div className="h-[40px] w-[128px]
       bg-[url('/images/cur-writing-7.png')] bg-cover">
    </div>
 
    <h2 className="font-bold text-[48px]">What our client are saying</h2>

    <div className="h-[600.89px] w-[868.47px] bg-[url('/images/cus-exp-bg.png')] bg-cover ml-auto mr-auto mt-[50px]">
         <div className="h-[485.89px] w-[696.57px] ml-[125px]
             bg-[url('/images/cus-exp.png')] bg-cover">
         </div>
    </div>
</div>


 {/* 
-------------------------------------------------------------------------------------------------
        container-8- providing
*/}


     <div className="h-[560px] w-[1920px] mt-[200px] 

           bg-[url('/images/provide.png')] bg-cover">

     </div>
    

 {/* 
-------------------------------------------------------------------------------------------------
        container-9-latest NEw
*/}

   <div className="h-[732px] w-[1320px] mt-[200px] mr-auto ml-auto">

    
   </div>



{/* body */}
    </div>
  )
}