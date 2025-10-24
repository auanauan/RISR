const header = document.getElementById("header");
const footer = document.getElementById("footer");

header.innerHTML = `<div class="w-100 d-none d-md-block" style="position: absolute; z-index: 1;">
    <ul class="nav nav-bg justify-content-center align-items-end flex-wrap">
        <li class="nav-item me-2">
            <a class="nav-link nav-link1" role="button" href="/apply_now/">Apply Now</a>
        </li>
                <li class="nav-item me-2">
            <a href="https://risr.openapply.com/events/new?only=tours" target="_blank" class="nav-link nav-link1" role="button">Book a Tour</a>
        </li>
        <li class="nav-item me-2">
            <a class="nav-link nav-link1" role="button" href="/tuition_fees/">Tuition &amp; Fees</a>
        </li>
        <li class="nav-item me-3">
            <a class="nav-link nav-link1" role="button" href="/contact_us/" style="padding-right: 20px;">Contact Us</a>
        </li>
        <li class="nav-item">
            <a class="nav-link2 nav-link" role="button" href="../"><img src="../img/nav_top.png" alt="" class="w-100"></a>
        </li>
        <li class="nav-item mx-2">
            <a class="nav-link nav-link1" role="button" href="/news/" style="padding-left: 25px;">NEWS</a>
        </li>
        <li class="nav-item mx-2">
            <a class="nav-link nav-link1" role="button" href="/school_calendar/">School Calendar</a>
        </li>
        <li class="nav-item mx-2">
            <a class="nav-link nav-link1" role="button" href="/work_at_risr/">Work at RISR</a>
        </li>
                <li class="nav-item mx-2 dropdown">
            <a class="nav-link nav-link1 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portals</a>
            <ul class="dropdown-menu dropdown-menu1">
                                    <li><a class="dropdown-item" href="https://risr.openapply.com/" target="_blank">OpenApply</a></li>
                                            </ul>
        </li>
    </ul>
    <!-- Additional Menu for larger screens -->
    <ul class="nav justify-content-center align-items-end d-none d-lg-flex flex-wrap">
        <li class="nav-item me-4 dropdown">
            <a class="nav-link nav-link-bt2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">About RisR</a>
            <ul class="dropdown-menu dropdown-menu2 p-0 mt-2">
                <li class="p-0 mb-2">
                    <div class="p-0" style="width: 100%; height: 10px; background: #416BA9; border-radius: 8px 8px 0 0;"></div>
                </li>
                <!-- <li class="me-2 mx-2"><a class="dropdown-item" id="overview" role="button">Overview</a></li> -->
                <li class="me-2 mx-2"><a class="dropdown-item" href="/history/" role="button">History</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" href="/vision/" role="button">Vision &amp; Mission</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" href="/curriculum/" role="button">Curriculum</a></li>
                <!-- <li class="me-2 mx-2 mb-2"><a class="dropdown-item" role="button" id="school_map">Facilities</a></li> -->
                <!-- <li class="me-2 mx-2 mb-2"><a class="dropdown-item" role="button" id="leadership">Leadership Team</a></li> -->
            </ul>
        </li>
        <li class=" nav-item me-4 dropdown" style="padding-right: 10px;">
            <a class="nav-link nav-link-bt2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Academics</a>
            <ul class="dropdown-menu dropdown-menu2 p-0 mt-2">
                <li class="p-0 mb-2">
                    <div class="p-0" style="width: 100%; height: 10px; background: #416BA9; border-radius: 8px 8px 0 0;"></div>
                </li>
                <li class="me-2 mx-2"><a class="dropdown-item" href="/early_years/" role="button">Early Years</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" href="/elementary_school/" role="button">Elementary School</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" href="/middle_school/" role="button">Middle School</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" href="/high_school/" role="button">High School</a></li>
                                    <li class="me-2 mx-2 mb-2"><a class="dropdown-item" role="button" href="/summer/">Summer School</a></li>
                            </ul>
        </li>
        <li class="nav-item me-4 dropdown">
            <a class="nav-link nav-link-bt2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admissions</a>
            <ul class="dropdown-menu dropdown-menu2 p-0 mt-2">
                <li class="p-0 mb-2">
                    <div class="p-0" style="width: 100%; height: 10px; background: #416BA9; border-radius: 8px 8px 0 0;"></div>
                </li>
                <li class="me-2 mx-2"><a class="dropdown-item" role="button" href="/tuition_fees/">Tuition &amp; Fees</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" href="/apply_now/" role="button">How to Apply</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" role="button" href="https://risr.openapply.com/events/new?only=tours">Book a Tour</a></li>
                <!-- <li class="me-2 mx-2 mb-2"><a class="dropdown-item" id="scholarships" role="button">Scholarships</a></li> -->
            </ul>
        </li>
        <li class="nav-item" style="width: 208px;">
            <a class="nav-link nav-link22" role="button" href="../"></a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link nav-link-bt2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Student life</a>
            <ul class="dropdown-menu dropdown-menu2 p-0 mt-2">
                <li class="p-0 mb-2">
                    <div class="p-0" style="width: 100%; height: 10px; background: #416BA9; border-radius: 8px 8px 0 0;"></div>
                </li>
                                                    <li class="me-2 mx-2"><a class="dropdown-item" role="button" href="/pop_star_program/">POP Star Program</a></li>
                                                    <li class="me-2 mx-2"><a class="dropdown-item" role="button" href="/extended_day_programs/">Extended Day Programs (EDP)</a></li>
                                                                                                                    <li class="me-2 mx-2"><a class="dropdown-item" role="button" href="/house_system/">House system</a></li>
                            </ul>
        </li>
        <li class="nav-item mx-3 dropdown">
            <a class="nav-link nav-link-bt2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Community</a>
            <ul class="dropdown-menu dropdown-menu2 p-0 mt-2">
                <li class="p-0 mb-2">
                    <div class="p-0" style="width: 100%; height: 10px; background: #416BA9; border-radius: 8px 8px 0 0;"></div>
                </li>
                                <li class="me-2 mx-2"><a class="dropdown-item" href="https://www.rism.ac.th/" target="_blank">RIS Minburi Campus</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" href="https://www.rise.ac.th/" target="_blank">RIS Early Years Campus</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" href="https://www.risphuket.ac.th/" target="_blank">RIS Phuket Campus</a></li>
                <li class="me-2 mx-2"><a class="dropdown-item" role="button" href="/work_at_risr/">Work at RISR</a></li>
            </ul>
        </li>
        <li class="nav-item mx-3 dropdown">
            <a class="nav-link nav-link-bt2 dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Links</a>
            <ul class="dropdown-menu dropdown-menu3 p-0 mt-2">
                <li class="p-0 mb-2">
                    <div class="p-0" style="width: 100%; height: 10px; background: #416BA9; border-radius: 8px 8px 0 0;"></div>
                </li>
                                <li class="me-2 mx-2 mb-2"><a class="dropdown-item" href="https://drive.google.com/file/d/10MRolCI91qRRA4hob25hN9-Fwh1onkem/preview">AQI Policy</a></li>
                <li class="me-2 mx-2 mb-2"><a class="dropdown-item" href="https://docs.google.com/document/d/1zS1mBFScneDc2BxFLovb_VzOwxRD4zq9XZp8N-Pe9T4/preview">Personal Data Protection Policy</a></li>
                <li class="me-2 mx-2 mb-2"><a class="dropdown-item" href="https://drive.google.com/file/d/19GubEwoqqA8WTpupfBVXcGoCBYdO70Dn/preview">Child Safeguarding</a></li>
                <li class="me-2 mx-2 mb-2"><a class="dropdown-item" href="/newsletter/" role="button">Newsletter</a></li>
            </ul>
        </li>
    </ul>
</div>`;

footer.innerHTML = `<div class="d-none d-md-block">
        <div class="container_food">
          <img
            src="../img/food1.png"
            alt="Snow"
            style="width: 100%; height: 521px"
          />
          <div class="top_food">
            <div class="row justify-content-center">
              <div class="col-12 col-md-1"></div>
              <div class="col-6 col-md-1">
                <a href="https://www.facebook.com/RISRatchapruek/"
                  ><img src="../img/Group.png" class="w-80" alt=""
                /></a>
              </div>
              <div class="col-6 col-md-1">
                <a href="https://www.instagram.com/risratchapruek"
                  ><img src="../img/Group1.png" class="w-80" alt=""
                /></a>
              </div>
              <div class="col-6 col-md-1">
                <a
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=risr"
                  ><img src="../img/Group3.png" class="w-80" alt=""
                /></a>
              </div>
              <div class="col-6 col-md-1">
                <a href="https://www.youtube.com/@communicationsrisr"
                  ><img src="../img/Group4.png" class="w-80" alt=""
                /></a>
              </div>
              <div class="col-12 col-md-1"></div>
            </div>
          </div>
          <div class="centered_food">
            <div class="col-12">
              <div class="row">
                <div class="col-4">
                  <div class="food_text_thick">
                    Ruamrudee International school
                  </div>
                  <div class="food_text_thick mb-3">Ratchapruek campus</div>
                  <div class="food_text_thick2">
                    <div class="row mb-2">
                      <div class="col-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.6634 18.7749C20.6634 18.7749 19.5047 19.9129 19.2208 20.2466C18.7582 20.7402 18.2132 20.9733 17.4988 20.9733C17.4301 20.9733 17.3568 20.9733 17.2881 20.9687C15.928 20.8818 14.664 20.3517 13.716 19.8992C11.1238 18.647 8.84774 16.8691 6.95632 14.6159C5.39464 12.7375 4.35047 11.0008 3.65894 9.13607C3.23303 7.99806 3.07732 7.11141 3.14601 6.27504C3.19181 5.74031 3.3979 5.29699 3.77801 4.91765L5.33969 3.35916C5.56409 3.14893 5.80224 3.03467 6.0358 3.03467C6.32432 3.03467 6.55789 3.20834 6.70444 3.35459C6.70902 3.35916 6.7136 3.36373 6.71818 3.3683C6.99754 3.62881 7.26316 3.89846 7.54252 4.18639C7.68449 4.33265 7.83104 4.4789 7.97759 4.62972L9.22785 5.87742C9.7133 6.36188 9.7133 6.80977 9.22785 7.29423C9.09504 7.42677 8.96681 7.5593 8.834 7.68727C8.4493 8.08032 8.7515 7.77874 8.35307 8.13523C8.34391 8.14437 8.33475 8.14894 8.33017 8.15808C7.93632 8.55113 8.00959 8.93504 8.09203 9.19555C8.09661 9.20926 8.10119 9.22297 8.10577 9.23668C8.43092 10.0228 8.88889 10.7632 9.58501 11.6452L9.58959 11.6498C10.8536 13.2037 12.1863 14.4149 13.6564 15.3427C13.8441 15.4615 14.0365 15.5575 14.2197 15.6489C14.3845 15.7311 14.5402 15.8088 14.6731 15.8911C14.6914 15.9002 14.7097 15.9139 14.728 15.9231C14.8837 16.0008 15.0303 16.0373 15.1814 16.0373C15.5615 16.0373 15.7997 15.7997 15.8775 15.722L16.7752 14.8261C16.9309 14.6708 17.1782 14.4834 17.4667 14.4834C17.7507 14.4834 17.9842 14.6616 18.1262 14.817C18.1308 14.8216 18.1308 14.8216 18.1354 14.8261L20.6588 17.3444C21.1305 17.8106 20.6634 18.7749 20.6634 18.7749Z"
                            stroke="#E5E9EF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div class="col" style="color: #fff; display: inline">
                        +66 (0)2 030 0533
                      </div>
                    </div>
                  </div>
                  <div class="food_text_thick2">
                    <div class="row">
                      <div class="col-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 21.6038C12 21.6038 19.5131 14.9255 19.5131 9.91685C19.5131 5.76751 16.1494 2.40381 12 2.40381C7.85067 2.40381 4.48697 5.76751 4.48697 9.91685C4.48697 14.9255 12 21.6038 12 21.6038Z"
                            stroke="#E5E9EF"
                            stroke-width="2"
                          ></path>
                          <path
                            d="M14.4003 9.60396C14.4003 10.9294 13.3258 12.004 12.0003 12.004C10.6748 12.004 9.60032 10.9294 9.60032 9.60396C9.60032 8.27848 10.6748 7.20396 12.0003 7.20396C13.3258 7.20396 14.4003 8.27848 14.4003 9.60396Z"
                            stroke="#E5E9EF"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                      <div class="col">
                        Bang Kruai – Sai Noi Rd, Tambon Bang Krang, Amphoe
                        Mueang Nonthaburi, Chang Wat Nonthaburi 11000
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-1">
                  <div
                    style="
                      width: 1px;
                      height: 100%;
                      flex-shrink: 0;
                      background: #d9d9d9;
                    "
                  ></div>
                </div>
                <div class="col-7">
                  <div class="row">
                    <div class="col">
                      <div class="food_text_thick">admissions</div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/tuition_fees/ '"
                        type="button"
                      >
                        Tuition &amp; Fees
                      </div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/how_to_apply/ '"
                        type="button"
                      >
                        How to Apply
                      </div>
                      <div
                        class="food_text_thick2 mt-3"
                        type="button"
                        onclick="window.location.href='https://www.google.com/'"
                      >
                        Book a Tour
                      </div>
                    </div>
                    <div class="col">
                      <div class="food_text_thick">About RISR</div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/history/ '"
                        type="button"
                      >
                        History
                      </div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/vision/ '"
                        type="button"
                      >
                        Vision &amp; Mission
                      </div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/curriculum/ '"
                        type="button"
                      >
                        Curriculum
                      </div>
                    </div>
                    <div class="col">
                      <div class="food_text_thick">academics</div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/early_years/ '"
                        type="button"
                      >
                        EARLY YEARS
                      </div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/elementary_school/ '"
                        type="button"
                      >
                        Elementary School
                      </div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/middle_school/ '"
                        type="button"
                      >
                        Middle School
                      </div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/high_school/ '"
                        type="button"
                      >
                        High School
                      </div>
                    </div>
                    <div class="col">
                      <div class="food_text_thick">community</div>
                      <div class="food_text_thick2 mt-3">
                        <a
                          class="food_text_thick2 text-decoration-none"
                          href="https://www.rism.ac.th/"
                          target="_blank"
                          >RIS Minburi Campus</a
                        >
                      </div>
                      <div class="food_text_thick2 mt-3">
                        <a
                          class="food_text_thick2 text-decoration-none"
                          href="https://www.rise.ac.th/"
                          target="_blank"
                          >RIS Early Years Campus</a
                        >
                      </div>
                      <div class="food_text_thick2 mt-3">
                        <a
                          class="food_text_thick2 text-decoration-none"
                          href="https://www.risphuket.ac.th/"
                          target="_blank"
                          >RIS Phuket Campus</a
                        >
                      </div>
                      <div
                        class="food_text_thick2 mt-3"
                        onclick="window.location.href='/work_at_risr/ '"
                        type="button"
                      >
                        Work at RISR
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-block d-md-none">
        <div class="container_food">
          <img src="../img/food_mb.png" alt="Snow" style="width: 100%" />
          <div class="top_food">
            <div class="row d-flex justify-content-center">
              <div class="col p-0">
                <a href="https://www.facebook.com/RISRatchapruek/"
                  ><img src="../img/Group.png" alt="" class="w-100"
                /></a>
              </div>
              <div class="col p-0">
                <a href="https://www.instagram.com/risratchapruek"
                  ><img src="../img/Group1.png" alt="" class="w-100"
                /></a>
              </div>
              <div class="col p-0">
                <a
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=risr"
                  ><img src="../img/Group3.png" alt="" class="w-100"
                /></a>
              </div>
              <div class="col p-0">
                <a href="https://www.youtube.com/@communicationsrisr"
                  ><img src="../img/Group4.png" alt="" class="w-100"
                /></a>
              </div>
            </div>
          </div>
          <div class="centered_food">
            <div class="col-12">
              <div class="row">
                <div class="col-12">
                  <div class="food_text_thick" style="font-size: 7vw">
                    Ruamrudee International school
                  </div>
                  <div class="food_text_thick mb-4" style="font-size: 6.5vw">
                    Ratchapruek campus
                  </div>
                  <div class="food_text_thick2 mb-2">
                    <div class="row">
                      <div class="col-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.6634 18.7749C20.6634 18.7749 19.5047 19.9129 19.2208 20.2466C18.7582 20.7402 18.2132 20.9733 17.4988 20.9733C17.4301 20.9733 17.3568 20.9733 17.2881 20.9687C15.928 20.8818 14.664 20.3517 13.716 19.8992C11.1238 18.647 8.84774 16.8691 6.95632 14.6159C5.39464 12.7375 4.35047 11.0008 3.65894 9.13607C3.23303 7.99806 3.07732 7.11141 3.14601 6.27504C3.19181 5.74031 3.3979 5.29699 3.77801 4.91765L5.33969 3.35916C5.56409 3.14893 5.80224 3.03467 6.0358 3.03467C6.32432 3.03467 6.55789 3.20834 6.70444 3.35459C6.70902 3.35916 6.7136 3.36373 6.71818 3.3683C6.99754 3.62881 7.26316 3.89846 7.54252 4.18639C7.68449 4.33265 7.83104 4.4789 7.97759 4.62972L9.22785 5.87742C9.7133 6.36188 9.7133 6.80977 9.22785 7.29423C9.09504 7.42677 8.96681 7.5593 8.834 7.68727C8.4493 8.08032 8.7515 7.77874 8.35307 8.13523C8.34391 8.14437 8.33475 8.14894 8.33017 8.15808C7.93632 8.55113 8.00959 8.93504 8.09203 9.19555C8.09661 9.20926 8.10119 9.22297 8.10577 9.23668C8.43092 10.0228 8.88889 10.7632 9.58501 11.6452L9.58959 11.6498C10.8536 13.2037 12.1863 14.4149 13.6564 15.3427C13.8441 15.4615 14.0365 15.5575 14.2197 15.6489C14.3845 15.7311 14.5402 15.8088 14.6731 15.8911C14.6914 15.9002 14.7097 15.9139 14.728 15.9231C14.8837 16.0008 15.0303 16.0373 15.1814 16.0373C15.5615 16.0373 15.7997 15.7997 15.8775 15.722L16.7752 14.8261C16.9309 14.6708 17.1782 14.4834 17.4667 14.4834C17.7507 14.4834 17.9842 14.6616 18.1262 14.817C18.1308 14.8216 18.1308 14.8216 18.1354 14.8261L20.6588 17.3444C21.1305 17.8106 20.6634 18.7749 20.6634 18.7749Z"
                            stroke="#E5E9EF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div class="col" style="color: #fff; display: inline">
                        +66 (0)2 030 0533
                      </div>
                    </div>
                  </div>
                  <div class="food_text_thick2 mb-5">
                    <div class="row">
                      <div class="col-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 21.6038C12 21.6038 19.5131 14.9255 19.5131 9.91685C19.5131 5.76751 16.1494 2.40381 12 2.40381C7.85067 2.40381 4.48697 5.76751 4.48697 9.91685C4.48697 14.9255 12 21.6038 12 21.6038Z"
                            stroke="#E5E9EF"
                            stroke-width="2"
                          ></path>
                          <path
                            d="M14.4003 9.60396C14.4003 10.9294 13.3258 12.004 12.0003 12.004C10.6748 12.004 9.60032 10.9294 9.60032 9.60396C9.60032 8.27848 10.6748 7.20396 12.0003 7.20396C13.3258 7.20396 14.4003 8.27848 14.4003 9.60396Z"
                            stroke="#E5E9EF"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                      <div class="col">
                        Bang Kruai – Sai Noi Rd, Tambon Bang Krang, Amphoe
                        Mueang Nonthaburi, Chang Wat Nonthaburi 11000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="text-center d-flex align-items-center"
        style="
          background: var(--Main-Primary, #1c355e);
          height: auto;
          min-height: 120px;
          padding: 20px 0;
        "
      >
        <div class="col-12 food_text_end text-center">
          <!-- สำหรับ learning project -->
          <p style="margin-bottom: 8px; font-size: 14px; color: white">
            This is a clone project for educational purposes only.
          </p>
          <p style="margin-bottom: 8px; font-size: 14px; color: white">
            Original design © 2024 Ruamrudee International School Ratchapruek
            Campus
          </p>
          <p style="margin-bottom: 0; font-size: 14px; color: white">
            Recreated by auanauan_ for learning web development
          </p>
        </div>
      </div>
    </div>`;
