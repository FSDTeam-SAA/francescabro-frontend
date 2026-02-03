export function Footer() {
  return (
    <footer className="bg-[#FF9796] text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 ">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

          {/* Contact */}
          <div className="md:col-span-2">
            <h3 className="text-[24px] font-bold text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <p className="text-[16px] font-semibold">Telephone</p>
              <p className="text-[12px] font-normal">+39 349 7934654</p>
              <p className="text-[12px] font-normal">Mon-Fri: 9:00/13:00</p>
              <p className="text-[12px] font-normal">13:30/17:30</p>
              <p className="text-[16px] font-semibold mt-3">Email</p>
              <p className="text-[12px] font-normal">booking@seafever.it</p>
            </div>
          </div>

          {/* Booking Assistance */}
          <div className="md:col-span-4">
            <h3 className="text-[24px] font-bold text-white mb-4">
              Booking Assistance Hours
            </h3>
            <div className="space-y-2">
              <p className="text-[12px] font-normal">
                High Season (Apr–Oct): 9:00/13:00 – 14:00/18:00
              </p>
              <p className="text-[12px] font-normal">
                Low Season (Nov–Mar): 9:00 – 17:30
              </p>
            </div>
          </div>

          {/* Main Office */}
          <div className="md:col-span-2">
            <h3 className="text-[24px] font-bold text-white mb-4">
              Main Office
            </h3>
            <div className="space-y-2">
              <p className="text-[12px] font-normal">Torre 1 - Geovillage</p>
              <p className="text-[12px] font-normal">Via Georgia 17 - Porta 7</p>
              <p className="text-[12px] font-normal">
                07026 Olbia (SS), Sardegna
              </p>
            </div>
          </div>

          {/* Shipyard */}
          <div className="md:col-span-2">
            <h3 className="text-[24px] font-bold text-white mb-4">
              Shipyard
            </h3>
            <div className="space-y-2">
              <p className="text-[12px] font-normal">Cantieri di Olbia</p>
              <p className="text-[12px] font-normal">Via Indonesia 6</p>
              <p className="text-[12px] font-normal">07026 Olbia (OT)</p>
              <p className="text-[12px] font-normal">Sardegna</p>
              <p className="text-[12px] font-bold mt-2">
                Tel: +39 333 6385429
              </p>
            </div>
          </div>

          {/* Charter Base */}
          <div className="md:col-span-2">
            <h3 className="text-[24px] font-bold text-white mb-4">
              Charter Base
            </h3>
            <div className="space-y-2">
              <p className="text-[12px] font-normal">Marina dell&apos; Isola</p>
              <p className="text-[12px] font-normal">Via S&apos;Isuedda</p>
              <p className="text-[12px] font-normal">
                07020 Golfo Aranci (OT), Italy
              </p>
            </div>
          </div>

        </div>

    
      </div>
    </footer>
  )
}
