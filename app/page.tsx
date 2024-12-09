
export default function HOomePage(){
  return(
    <div className="body h-[9879px] w-[1920px] bg-[#0d0d0d] 
                  max-lg:w-[480px] max-lg:h-[14000px] 
                  sm:w-[768px] sm:h-[13000px]">
        
        {/* header */}
        <div className="h-[950px] w-[1920px]
                        max-lg:w-[480px] max-lg:h-[750px] 
                        sm:w-[768px] sm:h-[1550px] ">
                        
      
      {/* nav */}
          <div className="h-[87spx] w-[1320px] flex justify-between ml-auto mr-auto mt-[100px]
                          max-lg:w-[420px]
                          sm:w-[708px]">
                            
              
             {/* div-1-sections */}
            <div className="h-[24px] w-[508px] text-[#ffffff] flex justify-between items-center text-base
                            max-lg:hidden
                            sm:hidden">
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
             <div className="h-[32px] w-[109px] font-bold text-2xl mt-[-45px] mr-[250px]
             max-lg:mt-0 max-lg:text-4xl 
             sm:mt-0 sm:text-5xl ">
               <h1>Food
                 <span className="text-[#FF9F0D]">tuck</span>
               </h1>   
             </div> 

             

             {/* div-3-icons */}
            <div className="max-lg:w-[30px] h-[54px] w-[350px] flex justify-between items-center">
                <div className=" max-lg:border-none sm:border-none sm:w-[40px] sm:ml-[250px] h-[54px] w-[310px] border border-[#FF9F0D] rounded-[27px] flex justify-evenly items-center">
                  <input className="max-lg:hidden sm:hidden bg-[#0d0d0d] ml-[15px]  text-[#ffffff]" type="text" placeholder="Search..." />
                  <div className="h-[24px] w-[24px] mr-[15px] bg-[url('/images/magni.png')] bg-cover 
                                  max-lg:bg-[url('/images/magni.png')]"></div>
                </div>
                <div className="h-[24px] w-[24px] bg-[url('/images/shop.png')] bg-cover sm:mr-[20px]"></div>

            </div>

             {/* nav */}
          </div>
       
       {/* below-the-nav */}
       <div className="flex max-lg:block sm:block sm:ml-[-180px]">
       {/* div-1 */}
         <div className="ml-[245px] mt-[100px] h-[492px] w-[520px] flex justify-between items-center max-lg:ml-1">
             <div className="h-[492px] w-[25.28px] 
                 bg-[url('/images/social-acc.png')] bg-cover">
             </div>

             <div className="h-[356px] w-[472px] ">
                <div className="h-[40px] w-[249px]
                   bg-[url('/images/cur-writing.png')] bg-cover">
                </div>
                <h1 className="h-[136px] w-[499px] font-bold text-[60px] max-lg:text-[50px]">
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
         <div className="h-[670px] w-[877.7px] mt-[150px] ml-[200px] max-lg:ml-0 max-lg:hidden
                 bg-[url('/images/hero-img.png')] bg-cover">
         </div>

         {/* below */}
      </div>

          {/* header */}
        </div>
{/* 
-------------------------------------------------------------------------------------------------
        container-2 -food-products bo */}
        
      <div className="h-[562px] w-[1320px] flex justify-between ml-[295px] mt-[300px] 
                      max-lg:block max-lg:mt-[100px] max-lg:ml-[30px] max-lg:h-[1200px]
                      sm:block sm:w-[768px] sm:h-[1300px] sm:mt-[100px] sm:ml-[50px] ">

          {/* div-1 */}
          <div className="h-[562px] w-[562px]">

              <div className="h-[40px] w-[91px] bg-[url('/images/cur-writing-2.png')] bg-cover"></div>
              <h1 className="h-[136px] w-[499px] font-bold text-[48px]">
                  <span className="text-[#FF9F0D]">We</span>Create the best foody product
              </h1>      
              <p className="h-[48px] w-[526px] mt-[50px] font-normal text-[16px] max-lg:w-[467px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
              </p>

              <div className="h-[18px] w-[526px] mt-[100px] flex items-center font-normal text-[18px] 
                              max-lg:text-[16px] max-lg:font-bold">
                  <div className="h-[12.24px] w-[17px] bg-[url('/images/tick.png')] bg-cover"> </div> 
                  <p className="ml-[10px]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
              </div>      
              
              <div className="h-[18px] w-[566px] mt-[40px] flex items-center font-normal text-[18px]
                                max-lg:text-[16px] max-lg:font-bold">
                  <div className="h-[12.24px] w-[17px] bg-[url('/images/tick.png')] bg-cover"> </div> 
                  <p className="ml-[10px]"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
              </div>  

              <div className="h-[18px] w-[526px] mt-[40px] flex items-center  font-normal text-[18px]
                               max-lg:text-[16px] max-lg:font-bold ">
                  <div className="h-[12.24px] w-[17px] bg-[url('/images/tick.png')] bg-cover"> </div> 
                  <p className="ml-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>  

              <button className=" mt-[40px] h-[60px] w-[190px] bg-[#ff9d0d] rounded-[27px]">
                  Read More
               </button>
              
          </div>

          {/* div-2 */}
          <div className="h-[526px] w-[660px] max-lg:mt-[100px] max-lg:w-[480px] sm:w-[768px] sm:mt-[150px]">

             <div className="h-[330px] w-[660px] bg-[url('/images/food-pro-1.png')] bg-cover
                             max-lg:w-[470px] max-lg:bg-center "></div>
 
             <div className="h-[194px] w-[660px] flex justify-between mt-[20px] max-lg:w-[470px]">
               <div className="h-[194px] w-[322px] bg-[url('/images/food-pro-2.png')] bg-cover max-lg:w-[225px] max-lg:bg-center"></div>   
               <div className="h-[194px] w-[322px] bg-[url('/images/food-pro-3.png')] bg-cover max-lg:w-[225px] max-lg:bg-center"></div>
            </div>

          </div>

      </div>

{/* 
-------------------------------------------------------------------------------------------------
        container-3 -food-items */}
      <div className="h-[489px] w-[1320px]  mt-[200px] ml-auto mr-auto
                      max-lg:mt-[200px] max-lg:block max-lg:ml-[-390px] max-lg:h-[1640px]
                      sm:ml-0 sm:mr-0 sm:w-[768px] sm:h-[938px] ">
                {/* div-1 */}
          <div className="h-[40px] w-[177px] bg-[url('/images/cur-writing-3.png')] bg-cover ml-auto mr-auto
            sm:ml-[300px] sm:mr-0"></div>
          <h1 className="h-[56px] w-[496px] font-bold text-[48px] ml-auto mr-auto sm:ml-[150px] sm:mt-[20px] sm:mr-0">
                  <span className="text-[#FF9F0D]">Ch</span>oose Food Iteam
          </h1>

                {/* div-2 */}
          <div className="h-[329px] w-[1320px] flex justify-between mt-[65px]
                           max-lg:block max-lg:ml-[500px] max-lg:mt-[-25px]
                           sm:block">
             <div className="h-[328px] w-[305px] sm:ml-[50px] bg-[url('/images/food-it-1.png')] bg-cover">
                 <div className="h-[97px] w-[206px] bg-[url('/images/dis-food-it.png')] bg-cover mt-[110px]"></div>
             </div>
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-2.png')] bg-cover max-lg:mt-[40px]
             sm:ml-[50px] sm:mt-[50px]"></div>
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-3.png')] bg-cover max-lg:mt-[40px]
             sm:ml-[400px] sm:mt-[-710px]"></div>
             <div className="h-[328px] w-[305px] bg-[url('/images/food-it-4.png')] bg-cover max-lg:mt-[40px]
             sm:ml-[400px] sm:mt-[50px]"></div>

          </div>

      </div>

 {/* 
-------------------------------------------------------------------------------------------------
        container-4 -food-items-tastes */}

      <div className="h-[562px] w-[1320px] flex justify-between ml-[295px] mt-[300px] 
      max-lg:h-[740px]  max-lg:mt-[150px] max-lg:ml-8
      sm:w-[768px] sm:block sm:h-[700px] sm:mt-[150px] sm:ml-[50px] ">

         
          {/* div-1 */}
        <div className="max-lg:hidden sm:hidden">
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
          <div className="h-[650px] w-[562px] mt-[50px] ">

              <div className="h-[40px] w-[175px] bg-[url('/images/cur-writing-4.png')] bg-cover"></div>
              <h1 className="h-[112px] w-[473px] font-bold text-[48px] max-lg:text-[40px] max-lg:w-[423px] max-lg:mt-[10px                                                                                           ]">
                  <span className="text-[#FF9F0D]">Ex</span>ta ordinary taste And Experienced 
              </h1>      
              <p className="h-[120px] w-[526px] mt-[50px] font-normal text-[16px] max-lg:w-[423px]">
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

   <div className="h-[469px] w-[1920px] mt-[600px] 
   max-lg:mt-[200px] max-lg:w-[480px] max-lg:h-[1140px] 
   sm:w-[768px]  sm:h-[540px] sm:mt-[100px]">
       
       <div className="h-[247px] w-[1320px] ml-auto mr-auto flex justify-between 
       max-lg:w-[420px] max-lg:block max-lg:ml-[180px]
       sm:block sm:ml-[100px] " >
              {/* box-1 */}
           <div className="h-[247px] w-[218px] sm:w-[250px]">
              <div className="h-[124px] w-[124px] bg-[url('/images/exp-logo-1.png')] bg-cover"></div>
              <p className="font-normal text-[24px] max-lg:ml-[-45px] max-lg:mt-[20px] sm:w-[250px] sm:mt-[20px] sm:ml-[-40px]">Professional Chefs</p>
              <h2 className="font-bold text-[40px] max-lg:ml-[30px] sm:ml-[20px]">420</h2>
 
           </div>
          
           {/* box-2 */}
           <div className="h-[247px] w-[162px] max-lg:mt-[50px]
           sm:mt-[50px]">
              <div className="h-[124px] w-[124px] bg-[url('/images/exp-logo-2.png')] bg-cover"></div>
              <p className="font-normal text-[24px] max-lg:ml-[-25px] max-lg:mt-[20px] sm:w-[250px] sm:mt-[20px] sm:ml-[-20px]">Items Of Food</p>
              <h2 className="font-bold text-[40px] max-lg:ml-[30px] sm:ml-[20px]">320</h2>
 
           </div> 

           {/* box-3 */}
           <div className="h-[247px] w-[248px] max-lg:mt-[50px] 
           sm:ml-[400px] sm:mt-[-540px]">
              <div className="h-[124px] w-[124px] bg-[url('/images/exp-logo-3.png')] bg-cover"></div>
              <p className="font-normal text-[24px] max-lg:ml-[-55px] max-lg:mt-[20px] sm:w-[250px] sm:mt-[20px] sm:ml-[-60px]">Years Of Experienced</p>
              <h2 className="font-bold text-[40px] max-lg:ml-[30px] sm:ml-[20px]">30+</h2>
 
           </div>

           {/* box-4 */}
           <div className="h-[247px] w-[206px] max-lg:mt-[50px]
           sm:ml-[400px] sm:mt-[50px]">
              <div className="h-[124px] w-[124px] bg-[url('/images/exp-logo-4.png')] bg-cover"></div>
              <p className="font-normal text-[24px] max-lg:ml-[-35px] max-lg:mt-[20px] sm:w-[250px] sm:mt-[20px] sm:ml-[-40px]">Happy Customers</p>
              <h2 className="font-bold text-[40px] max-lg:ml-[30px] sm:ml-[20px]">220</h2>
 
           </div>


       </div>

   </div>


 {/* 
-------------------------------------------------------------------------------------------------
        container-5- Menu
*/}

   <div className="h-[656px] w-[1320px] mt-[200px] mr-auto ml-auto 
   max-lg:mt-[200px] max-lg:ml-0 max-lg:mr-0   max-lg:h-[1550px]
   sm:w-[768px] sm:h-[1150px] ">
       <div className="h-[40px] w-[144px] mr-auto ml-auto
           bg-[url('/images/cur-writing-5.png')] bg-cover
            max-lg:ml-[150px] max-lg:w-[164px]
            sm:w-[184px]">
       </div>

       <h2 className="font-bold text-[48px] ml-[475px]  max-lg:ml-[60px] sm:ml-[200px] sm:mt-[30px]">
        <span className="text-[#ff9f0d]">Fr</span>om Our Menu
       </h2>

       <div className="h-[28px] w-[1056px] flex justify-between items-center mt-[50px] 
       max-lg:ml-[10px] max-lg:w-[470px] max-lg:text-[14px]
       sm:ml-[30px] sm:w-[698px]">
         <a className="text-[#ff9f0d]">Breakfast</a>
         <a>Lunch</a>
         <a>Dinner</a>
         <a>Desert</a>
         <a>Drinks</a>
         <a>Snacks</a>
         <a>Soups</a>
       </div>

       <div className="w-[1320px] h-[406px] flex justify-between mt-[50px] max-lg:block
        sm:block">
          {/* box-1 */}
          <div className="w-[515px] h-[406px] bg-[url('/images/main-menu.png')] bg-cover sm:ml-[150px]">
                 <div className="w-[366px] h-[362px] bg-[url('/images/main-menu-sub.png')] bg-cover mt-[30px] ml-[50px]"></div>
          </div>

            {/* box-2 */}
          <div className="w-[386px] h-[406px] max-lg:ml-[50px] max-lg:mt-[50px] 
          sm:ml-[0px] sm:mt-[40px]">
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
               <div className="w-[386px] h-[79px] flex justify-between mt-[25px]
               ">
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
            <div className="w-[386px] h-[406px] max-lg:ml-[50px] max-lg:mt-[50px]
            sm:ml-[400px] sm:mt-[-400px]">
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

    <div className="h-[656px] w-[1320px] mt-[200px] mr-auto ml-auto
     max-lg:w-[480px] max-lg:mt-[200px]  max-lg:h-[1900px]
     sm:w-[768px] sm:h-[1050px] ">
        <div className="h-[40px] w-[56px] mr-auto ml-auto  sm:w-[70px]
            bg-[url('/images/cur-writing-6.png')] bg-cover">
        </div>

        <h2 className="font-bold text-[48px] ml-[475px] max-lg:ml-[70px] sm:ml-[220px]">
          <span className="text-[#ff9f0d]">Me</span>et Our Chef
        </h2>       

        <div className="h-[391px] w-[1320px] flex justify-between mt-[65px]
                        max-lg:block max-lg:ml-[85px]
                        sm:block sm:ml-[50px]">
             <div className="h-[391px] w-[312px] bg-[url('/images/chef-1.png')] bg-cover max-lg:mt-[25px]"></div>
             <div className="h-[391px] w-[312px] bg-[url('/images/chef-2.png')] bg-cover max-lg:mt-[45px]
             sm:mt-[50px] "></div>
             <div className="h-[391px] w-[312px] bg-[url('/images/chef-3.png')] bg-cover max-lg:mt-[45px]
             sm:ml-[350px] sm:mt-[-830px] "></div>
             <div className="h-[391px] w-[312px] bg-[url('/images/chef-4.png')] bg-cover max-lg:mt-[45px]
             sm:ml-[350px] sm:mt-[50px]"></div>
         </div>

    </div>

 {/* 
-------------------------------------------------------------------------------------------------
        container-7- cutomer expre
*/}

<div className="h-[770px] w-[1273px] mt-[200px] mr-auto ml-auto max-lg:hidden
sm:block sm:w-[768px] ">
    
    <div className="h-[40px] w-[128px] sm:ml-[50px] 
       bg-[url('/images/cur-writing-7.png')] bg-cover">
    </div>
 
    <h2 className="font-bold text-[48px] sm:ml-[50px] sm:mt-[20px]" >What our client are saying</h2>

    <div className="sm:ml-[-95px] h-[600.89px] w-[868.47px] bg-[url('/images/cus-exp-bg.png')] bg-cover ml-auto mr-auto mt-[50px]
                   ">
         <div className="h-[485.89px] w-[696.57px] ml-[125px]
             bg-[url('/images/cus-exp.png')] bg-cover
              ">
         </div>
    </div>
</div>


 {/* 
-------------------------------------------------------------------------------------------------
        container-8- providing
*/}


     <div className="h-[560px] w-[1920px] mt-[200px] 

           bg-[url('/images/provide.png')] bg-cover
           
           max-lg:hidden sm:hidden">

     </div>
    

 {/* 
-------------------------------------------------------------------------------------------------
        container-9-latest NEw
*/}

   <div className="h-[732px] w-[1320px] mt-[200px] mr-auto ml-auto
   max-lg:w-[480px] max-lg:mt-[200px]  max-lg:h-[2000px]
   sm:w-[768px] sm:h-[2000px] ">
        <div className="h-[40px] w-[124px] mr-auto ml-auto sm:w-[140px]
            bg-[url('/images/cur-writing-8.png')] bg-cover">
        </div>

        <h2 className="font-bold text-[48px] ml-[445px] max-lg:ml-[30px] max-lg:text-[44px] sm:ml-[150px]">
          <span className="text-[#ff9f0d]">La</span>test News & Blog
        </h2>       
    
        <div className="h-[569px] w-[1320px] flex justify-between mt-[50px] max-lg:block max-lg:ml-[25px]
        sm:block sm:ml-[175px]">

            {/* div-1 */}
            <div className="h-[569px] w-[424px] border">
               <div className="h-[349px] w-[423px] bg-[url('/images/news1.png')] bg-cover"></div>
               
               <p className="font-normal text-[16px] mt-[30px] text-[#ff9f0d] ml-[40px]">10 February 2022 </p>

               <h2 className="font-bold text-[24px] mt-[20px] ml-[40px]">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h2>

               <div className="flex justify-between mt-[30px]">
                  <p className="font-normal text-[16px] ml-[40px]">Learn More</p>
                  <div className="h-[20px] w-[76px] flex justify-between mr-[40px]">
                     <div className="h-[20px] w-[20px] bg-[url('/images/like.png')] bg-cover"></div>
                     <div className="h-[20px] w-[20px] bg-[url('/images/comm.png')] bg-cover"></div>
                     <div className="h-[20px] w-[20px] bg-[url('/images/shar.png')] bg-cover"></div>
                  </div>
               </div>
            </div>

            {/* div-2 */}
            <div className="h-[569px] w-[424px] border max-lg:mt-[50px] sm:mt-[50px]">
               <div className="h-[349px] w-[423px] bg-[url('/images/news2.png')] bg-cover"></div>
               
               <p className="font-normal text-[16px] mt-[30px] text-[#ff9f0d] ml-[40px]">10 February 2022 </p>

               <h2 className="font-bold text-[24px] mt-[20px] ml-[40px]">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h2>

               <div className="flex justify-between mt-[30px]">
                  <p className="font-normal text-[16px] ml-[40px]">Learn More</p>
                  <div className="h-[20px] w-[76px] flex justify-between mr-[40px]">
                     <div className="h-[20px] w-[20px] bg-[url('/images/like.png')] bg-cover"></div>
                     <div className="h-[20px] w-[20px] bg-[url('/images/comm.png')] bg-cover"></div>
                     <div className="h-[20px] w-[20px] bg-[url('/images/shar.png')] bg-cover"></div>
                  </div>
               </div>
            </div>

            {/* div-3 */}
            <div className="h-[569px] w-[424px] border max-lg:mt-[50px] sm:mt-[50px]">
               <div className="h-[349px] w-[423px] bg-[url('/images/news3.png')] bg-cover"></div>
               
               <p className="font-normal text-[16px] mt-[30px] text-[#ff9f0d] ml-[40px]">10 February 2022 </p>

               <h2 className="font-bold text-[24px] mt-[20px] ml-[40px]">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h2>

               <div className="flex justify-between mt-[30px]">
                  <p className="font-normal text-[16px] ml-[40px]">Learn More</p>
                  <div className="h-[20px] w-[76px] flex justify-between mr-[40px]">
                     <div className="h-[20px] w-[20px] bg-[url('/images/like.png')] bg-cover"></div>
                     <div className="h-[20px] w-[20px] bg-[url('/images/comm.png')] bg-cover"></div>
                     <div className="h-[20px] w-[20px] bg-[url('/images/shar.png')] bg-cover"></div>
                  </div>
               </div>
            </div>

        </div>
   </div>

 {/* 
-------------------------------------------------------------------------------------------------
        container-10-FOOTER
*/}

  <div className="h-[740.12px] w-[1920px] mt-[200px] max-lg:w-[480px] max-lg:mt-[200px] max-lg:h-[2150px] 
  sm:w-[768px]  sm:h-[1500px]">
       
       {/* div-1 */}
       <div className="h-[142.62px] w-[1170px] flex justify-between ml-auto mr-auto 
        max-lg:block max-lg:ml-[40px]
        sm:block sm:ml-[150px]">
                    {/* box-1 */}
          <div className="h-[80px] w-[1170px] font-bold max-lg:text-[28px] text-[32px] flex justify-between ">
              <div>
                <h2><span className="text-[#ff9f0d] ">St</span>ill You Need Our Support ?</h2>
                <p className="font-normal text-[16px] max-lg:text-[14px] max-lg:mt-[10px] mt-[20px]">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
              </div>
          </div>

                   {/* box-2 */}
          <div className="h-[52px] w-[599px] flex max-lg:mt-[10px]   sm:ml-[20px] sm:mt-[50px]">
             <input className="bg-[#ff9f0d] text-[#ffffff] h-[52px] pl-[20px]" type="text" placeholder="Enter Your Email" />
             
             <button className="text-[#ff9f0d] bg-[#ffffff] h-[52px] w-[163px]">
                Subscribe Now
             </button>
          </div>

       </div>

       {/* div-2 hr-line */}
       <div className="h-[4px] w-[1170px] ml-auto mr-auto max-lg:mt-[50px] sm:mt-[110px]
           bg-[url('/images/orange-line.png')] bg-cover">

       </div>



       {/* div-3  */}
      <div className="h-[367px] w-[1320px] ml-auto mr-auto flex justify-between mt-[100px]
       max-lg:block max-lg:ml-[85px]
       sm:block sm:ml-[100px]">
         {/* box-1 */}
         <div className="h-[367px] w-[312px]">
             <h2 className="font-bold text-[24px]">About Us.</h2>
             <p className=" mt-[20px]">
              orporate clients and leisure travelers has
              been relying on Groundlink for dependab
              safe, and professional chauffeured car
              service in major cities across World.
             </p>
            <div className="h-[74px] w-[250px] flex justify-between items-center mt-[30px]">
               <div className="h-[72px] w-[78px] bg-[url('/images/foot1.png')] bg-cover"></div>
               <div className="h-[74px] w-[149px] font-normal text-[14px]">
                   <p className="text-[18px]">Opening Houres</p>
                   <p>Mon - Sat(8.00 - 6.00)</p>
                   <p>Sunday - Closed</p>
               </div> 
            </div>
         </div>
{/*----------------------------------------------------------
          box-2 */}
          <div className="h-[367px] w-[149px] max-lg:mt-[0px]
          sm:ml-[400px] sm:mt-[-370px]">
             <ul>
               <h2 className="font-bold text-[24px] ">Useful Links</h2>
               <li className="mt-[20px] text-[20px]"><a>About</a></li>
               <li className="mt-[20px] text-[20px]"><a>News</a></li>
               <li className="mt-[20px] text-[20px]"><a>Partners</a></li>
               <li className="mt-[20px] text-[20px]"><a>Team</a></li>
               <li className="mt-[20px] text-[20px]"><a>Menu</a></li>
               <li className="mt-[20px] text-[20px]"><a>Contacts</a></li>
             </ul>
          </div> 

{/*----------------------------------------------------------
          box-3 */}
          <div className="h-[367px] w-[170px] max-lg:mt-[60px]
          sm:ml-[400px] sm:mt-[50px]">
             <ul>
               <h2 className="font-bold text-[24px] ">Help?</h2>
               <li className="mt-[17px] text-[20px]"><a>FAQ</a></li>
               <li className="mt-[17px] text-[20px]"><a>Term & Conditions</a></li>
               <li className="mt-[17px] text-[20px]"><a>Reporting</a></li>
               <li className="mt-[17px] text-[20px]"><a>Documentation</a></li>
               <li className="mt-[17px] text-[20px]"><a>Support Policy</a></li>
               <li className="mt-[17px] text-[20px]"><a>Privacy</a></li>
             </ul>
          </div> 

{/*----------------------------------------------------------
          box-3 */}
          <div className="h-[367px] w-[244px] max-lg:mt-[60px]
          sm:mt-[-370px]">
             <h2 className="font-bold text-[24px] ">Recent Post</h2>
            
             <div className="w-[244px] h-[53px] flex justify-between mt-[20px]">
                <div className="w-[59px] h-[48px] bg-[url('/images/foot2.png')] bg-cover"></div>
                <div>
                  <p className="text-[16px] text-[gray]">20 Feb 2022</p>
                  <p className="text-[18px]">Keep Your Business </p>
                </div>
             </div>

             <div className="w-[244px] h-[53px] flex justify-between mt-[20px]">
                <div className="w-[59px] h-[48px] bg-[url('/images/foot3.png')] bg-cover"></div>
                <div>
                  <p className="text-[16px] text-[gray]">20 Feb 2022</p>
                  <p className="text-[18px]">Keep Your Business </p>
                </div>
             </div>

             <div className="w-[244px] h-[53px] flex justify-between mt-[20px]">
                <div className="w-[59px] h-[48px] bg-[url('/images/foot4.png')] bg-cover"></div>
                <div>
                  <p className="text-[16px] text-[gray]">20 Feb 2022</p>
                  <p className="text-[18px]">Keep Your Business </p>
                </div>
             </div>
          </div>     
     
      </div>

      {/* div-4 */}
      <div className="h-[100px] w-[1920px] bg-[#4f4f4f]
       max-lg:w-[480px] max-lg:mt-[1300px] max-lg:h-[200px]
      sm:mt-[550px] sm:h-[200px]">
         
         <div className="mt-[40px] pt-[50px] h-[34px] w-[1320px] flex justify-between items-center ml-auto mr-auto
         max-lg:block max-lg:ml-[45px]
         sm:block sm:ml-[180px]">
            
            {/* box-1 */}
            <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>

            {/* box-2 */} 
            <div className="h-[32px] w-[240px] max-lg:mt-[50px] max-lg:ml-[75px] sm:mt-[50px] sm:ml-[75px]
              bg-[url('/images/social-icon.png')] bg-cover">

            </div>

         </div>

      </div>
      

  </div>



{/* body */}
    </div>
  )
}