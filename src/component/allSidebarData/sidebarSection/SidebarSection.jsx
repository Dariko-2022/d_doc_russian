import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance, axiosInstanceFq, axiosInstanceKadr } from "../../../config";

const SidebarSection = ({ roles, permission, ranks, currentUser }) => {
  console.log(permission);
  const [openFuq, setOpenFuq] = useState([]);
  const [kadrlarBranch, setKadrlarBranch] = useState([]);
  const [nameTab, setNameTab] = useState('');
  const [countKiruvchiTab, setCountKiruvchiTab] = useState([]);
  const [isRoles] = useState((roles?.includes("boss_1") || roles?.includes("boss_2") || roles?.includes("boss_3") || roles?.includes("chief_of_group") || roles?.includes("controller") || roles?.includes("head_of_department") || roles?.includes("human_resources") || roles?.includes("office_manager") || roles?.includes("employee")));
  // const [isRanks] = useState((ranks.includes(1) || ranks.includes(2) || ranks.includes(3) || ranks.includes(4) || ranks.includes(8)));

  // count tab fq
  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const res = await axiosInstanceFq.get("inExecutor/listCount/" + JSON.parse(localStorage.getItem('ids')) + '/' + JSON.parse(localStorage.getItem('oi')))
        if (isMounted) {
          let arr = Object.entries(res?.data?.data).find(d => d[1] > 0);

          if (arr?.length > 0)
            setNameTab(arr[0]);
        }
      } catch (error) {
        console.log(error.response);
      }
    }
    getData();

    return () => {
      isMounted = false;
    }
  }, [currentUser]);

  console.log(permission);

  // count tab kiruvchi
  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const res = await axiosInstance.get("monitoring/personal/" + JSON.parse(localStorage.getItem('ids')))
        console.log(res?.data);
        if (isMounted) {
          if (Object.entries(res.data).find(d => d[1] > 0)?.length > 0) {
            let arr = Object.entries(res.data).find(d => d[1] > 0);
            // console.log(arr);
            setCountKiruvchiTab(arr);
          } else {
            setCountKiruvchiTab(['No data', 0]);
          }
        }
      } catch (error) {
        console.log(error.response);
      }
    }
    getData();

    return () => {
      isMounted = false;
    }
  }, [currentUser]);

  // barcha modullarni o'qib olish
  useEffect(() => {
    let useEffectCount = true;

    const getData = async () => {
      try {
        const res = await axiosInstance.get("module/v2/getAll/" + JSON.parse(localStorage.getItem('oi')))
        // console.log(res.data)
        if (useEffectCount)
          setOpenFuq(res?.data);

      } catch (error) {
        console.log(error);
      }
    }
    getData();

    return () => {
      useEffectCount = false;
    }
  }, [currentUser]);

  // Kadrlar
  useEffect(() => {
    let useEffectCount = true;

    const getData = async () => {
      try {
        const res = await axiosInstanceKadr.get(`branch/getAll/${localStorage.getItem("oi")}`)
        // console.log(res.data)
        if (useEffectCount) {
          setKadrlarBranch(res.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();

    return () => {
      useEffectCount = false;
    }
  }, []);
  //KadrlarEnd

  const openFM = (name) => {
    if (document.querySelector(`.${name}`).querySelector('ul').style.display === "none") {
      document.querySelector(`.${name}`).querySelector('ul').style.display = "block";
    } else {
      document.querySelector(`.${name}`).querySelector('ul').style.display = "none";
    }
  }

  const openCh = (name) => {
    if (document.querySelector(`.${name}`).querySelector('ul').style.display === "none") {
      document.querySelector(`.${name}`).querySelector('ul').style.display = "block";
    } else {
      document.querySelector(`.${name}`).querySelector('ul').style.display = "none";
    }
  }

  console.log(countKiruvchiTab);
  console.log(openFuq);
  console.log(permission.length > 0);

  const [maxsusNazoratCount, setMaxsusNazoratCount] = useState(0)
  const [maxsusNazoratdanOlishCount, setMaxsusNazoratdanOlishCount] = useState(0)

  // Maxsus nazorat count
  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const res = await axiosInstance.get("superVisor/getCount/" + JSON.parse(localStorage.getItem('ids')))
        // console.log(res.data);
        if (isMounted)
          setMaxsusNazoratCount(res.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    getData();

    return () => {
      isMounted = false;
    }
  }, [currentUser]);

  // Nazoratdan olish count
  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const res = await axiosInstance.get("superVisor/getCountInProcess/" + JSON.parse(localStorage.getItem('ids')))
        // console.log(res.data);
        if (isMounted)
          setMaxsusNazoratdanOlishCount(res.data);
      } catch (error) {
        console.log(error.response);
      }
    }
    getData();

    return () => {
      isMounted = false;
    }
  }, [currentUser]);

  return (
    <div className="sidebar-section" style={{ paddingBottom: 30 }}>
      <ul className="nav nav-sidebar" data-nav-type="accordion">

        {/* kiruvchi sidebar */}
        <li className="nav-item " style={{ fontSize: '18px' }}>
          <Link to={{
            pathname: "/sahifa/asosiy",
            state: { data: "aaa" }
          }} className="nav-link liHover">
            <i className="icon-home4" style={{ color: "#0056B8" }} />
            <span>Bosh sahifa</span>
          </Link>
        </li>

        {openFuq?.length > 0 && openFuq.map((d, index) => {
          return (
            // kiruvchi
            (d.name === 'Kiruvchi' && d.active && isRoles) ? (
              d.visible && (
                <li key={index} className="nav-item " style={{ fontSize: '18px' }}>
                  <Link to={{
                    pathname: permission?.includes("YANGI QO'SHISH") ? "/kiruvchi" : permission?.includes("YANGI") ? "/kiruvchi/yangi" : (countKiruvchiTab[0] === 'rezalutsiya') ? "/kiruvchi/resolution" : countKiruvchiTab[0] === "bajarilmagan" ? "/kiruvchi/kechiktirilgan" : countKiruvchiTab[0] === "nazoratda" ? "/kiruvchi/nazorat" : countKiruvchiTab[0] === "nazoratdanOlish" ? "/kiruvchi/nazoratdan-olish" : countKiruvchiTab[0] === "bajarishUchun" ? "/kiruvchi/bajarish" : countKiruvchiTab[0] === "malumotUchun" ? "/kiruvchi/ma'lumot-uchun" : countKiruvchiTab[0] === "radEtilgan" ? "/kiruvchi/radetilgan" : countKiruvchiTab[0] === "umumlashtiruvchi" ? `/kiruvchi/umumlashtiruvchi` : countKiruvchiTab[0] === "bajarilgan" ? '/kiruvchi/bajarilgan' : maxsusNazoratCount ? "/kiruvchi/maxsusNazorat" : maxsusNazoratdanOlishCount ? "/kiruvchi/nazoratdan-olish" : '/sahifa/asosiy',
                    state: { data: "not_found" }
                  }}
                    className="nav-link liHover">
                    <i className="icon-file-check"
                      style={{ color: "#0056B8" }} />
                    <span>Kiruvchi</span>
                  </Link>
                </li>
              )
              // kadrlar
            ) : (d.name === 'Kadrlar' && isRoles && d.active && ranks.includes(7)) ? (
              d.visible && (
                <li key={index} className="nav-item " style={{ fontSize: '18px' }}>
                  <Link to={kadrlarBranch.length > 0 ? `/kadrlar/${kadrlarBranch[0].name}` : "/kadrlar/Asosiy"} className="nav-link liHover">
                    <i className="icon-users" style={{ color: "#0056B8" }} />
                    <span>Kadrlar</span>
                  </Link>
                </li>
              )
              // monitoring
            ) : (d.name === "Monitoring" && (permission?.includes("MONITORING")) && d.active) ? (
              // (roles?.includes("boss_1") || roles?.includes("boss_2") || roles?.includes("boss_3") || roles?.includes("controller") || roles?.includes("head_of_department") || roles?.includes("office_manager"))
              // permission.length > 0
              d.visible && (
                <li key={index} className="nav-item " style={{ fontSize: '18px' }}>
                  <Link to="/monitoring_kiruvchi" className="nav-link liHover">
                    <i className="icon-pie-chart5" style={{ color: "#0056B8" }} />
                    <span>Monitoring</span>
                  </Link>
                </li>
              )
            ) : (
              // fuqaro murojaati
              (((nameTab !== '' || (ranks?.includes(8))) && d.active && d.name === "Fuqaro Murojaati") ? (
                d.visible && (
                  <li key={index} className="nav-item nav-item-submenu fuqaroMurojaati" style={{ display: "block" }}>
                    <div className="nav-link" style={{ fontSize: '18px', cursor: "pointer" }}
                      onClick={() => openFM('fuqaroMurojaati')}>
                      <i className="icon-home4 text-primary" />
                      <span>Fuqaro Murojaatlari</span>
                    </div>
                    {ranks?.includes(8) ? (
                      <ul className="nav-item-ul" style={{ display: "none" }}>
                        <li className="nav-item">
                          <Link to="/fuqaro/murojati" className="nav-link liHover"
                            style={{ fontSize: '18px' }}>
                            <i className="icon-magazine"
                              style={{ color: "#0056B8" }} />
                            <span>Yangi Qo'shish</span>
                          </Link>
                        </li>
                      </ul>
                    ) : (
                      <ul className="nav-item-ul" style={{ display: "none" }}>
                        <li className="nav-item">
                          <Link to={`/fuqaro/murojati/${nameTab}`} className="nav-link liHover"
                            style={{ fontSize: '18px' }}>
                            <i className="icon-magazine"
                              style={{ color: "#0056B8" }} />
                            <span>Yangi</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                )
              ) : (
                // chiquvchi
                (d.name === "Chiquvchi" && d.active) ? (
                  <>
                    {/* <li key={index} className="nav-item nav-item-submenu chiquvchi" style={{ display: "block" }}>
                      <div className="nav-link" style={{ fontSize: '18px', cursor: "pointer" }}
                        onClick={() => openCh('chiquvchi')}>
                        <i className="icon-home4 text-primary" />
                        <span>Chiquvchi</span>
                      </div>

                      <ul className="nav-item-ul" style={{ display: "none" }}>
                        <li className="nav-item">
                          <Link to="/chiquvchi/yangi" className="nav-link liHover" style={{ fontSize: '18px' }}>
                            <i className="icon-magazine" style={{ color: "#0056B8" }} />
                            <span>Yangi</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/chiquvchi/shablon/yaratish" className="nav-link liHover" style={{ fontSize: '18px' }}>
                            <i className="icon-magazine" style={{ color: "#0056B8" }} />
                            <span>Yangi shablon yaratish</span>
                          </Link>
                        </li>
                      </ul>
                    </li> */}


                    {/* chiquvchi2 */}
                    <li key={index} className="nav-item nav-item-submenu chiquvchi2" style={{ display: "block" }}>
                      <div className="nav-link" style={{ fontSize: '18px', cursor: "pointer" }}
                        onClick={() => openCh('chiquvchi2')}>
                        <i className="icon-home4 text-primary" />
                        <span>Chiquvchi</span>
                      </div>

                      <ul className="nav-item-ul" style={{ display: "none" }}>
                        <li className="nav-item">
                          <Link to="/chiquvchi2/yangi" className="nav-link liHover" style={{ fontSize: '18px' }}>
                            <i className="icon-magazine" style={{ color: "#0056B8" }} />
                            <span>Yangi</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/chiquvchi2/shablon/yaratish" className="nav-link liHover" style={{ fontSize: '18px' }}>
                            <i className="icon-magazine" style={{ color: "#0056B8" }} />
                            <span>Yangi shablon yaratish</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </>
                ) : (
                  ""
                )
              ))
            )
          )
        })}

        {/* keng qidirish */}
        {isRoles && (
          <li className="nav-item" style={{ fontSize: '18px', display: "block" }}>
            <Link to="/qidirish" className="nav-link liHover">
              <i className="fas fa-search" style={{ color: "#0056B8" }} />
              <span>Keng qidirish</span>
            </Link>
          </li>
        )}

        {/* vaqtinchalik monitoring */}
        {/* {roles?.includes("boss_1") && (
          <li className="nav-item" style={{ fontSize: '18px', display: "block" }}>
            <Link to="/monitoring_kiruvchi" className="nav-link liHover">
              <i className="fas fa-chart-pie" style={{ color: "#0056B8" }} />
              <span>Monitoring</span>
            </Link>
          </li>
        )} */}
        {/* arxiv */}
        <li className="nav-item" style={{ display: "none" }}>
          <Link to="/arxiv" className="nav-link liHover" style={{ fontSize: '18px' }}>
            <i className="fas fa-archive" />
            <span>Arxiv</span>
          </Link>
        </li>

        {/* sozlamalar */}
        {roles?.includes("office_manager") && (
          <li className="nav-item ">
            <Link to="/office_manager/mavjud/paketlar" className="nav-link liHover"
              style={{ fontSize: '18px' }}>
              <i className="icon-cog" style={{ color: "#0056B8" }} />
              <span>Sozlamalar</span>
            </Link>
          </li>
        )}

        {/* admin sozlamalar */}
        <li className="nav-item " style={{ display: "none" }}>
          <Link to="/sozlamalarAdmin" className="nav-link liHover">
            <i className="fas fa-user-cog" style={{ color: "#0056B8" }} />
            <span>SozlamalarAdmin</span>
          </Link>
        </li>

        {/* shablonlar */}
        <li className="nav-item" style={{ display: "none" }}>
          <Link to="/shablonlar" className="nav-link liHover">
            <i className="fas fa-sitemap" />
            <span>Shablonlar</span>
          </Link>
        </li>

        {/* umumiy malumotlar */}
        <li className="nav-item liHover" style={{ display: "none" }}>
          <Link to="/umumiyMalumotlar" className="nav-link">
            <i className="icon-books" style={{ color: "#0056B8" }} />
            <span>Umumiy Ma'lumotlar</span>
          </Link>
        </li>

        {/* umumiy sozlamalar */}
        <li className="nav-item liHover" style={{ display: "none" }}>
          <Link to="/umumiySozlamalar" className="nav-link">
            <i className="fas fa-users-cog" style={{ color: "#0056B8" }} />
            <span>Umumiy Sozlamalar</span>
          </Link>
        </li>

        {/* boss1, boss2, boss3, chief_group, controller, employee, head_department, human_resources, office_manager, security,  sidebar */}
        <li className="nav-item" style={{ display: "none" }}>
          <div className="nav-link">
            <i className="icon-home4" />
            <span>Ish stoli</span>
          </div>
        </li>

        {/* pochta */}
        <li className="nav-item" style={{ display: "none" }}>
          <div className="nav-link">
            <i className="icon-home4" />
            <span>Pochta</span>
          </div>
        </li>

        {/* ichki */}
        <li className="nav-item nav-item-submenu" style={{ display: "none" }}>
          <div className="nav-link">
            <i className="icon-home4" />
            <span>Ichki</span>
          </div>
          <ul className="nav nav-group-sub">
            <li className="nav-item">
              <a href={"index.html"} className="nav-link">Qaror</a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Farmoyish
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Buyruqlar
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Chora tadbirlar
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Bayonnomalar
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Bildirishnomalar
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Xizmat xati
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Dalolatnoma
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Topshiriqlar
              </div>
            </li>
          </ul>
        </li>

        {/* qo'shimcha */}
        <li className="nav-item nav-item-submenu" style={{ display: "none" }}>
          <div className="nav-link">
            <i className="icon-home4" />
            <span>Qo'shimcha</span>
          </div>
          <ul className="nav nav-group-sub">
            <li className="nav-item">
              <a href={"index.html"} className="nav-link">Keng qidirish</a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Arxiv
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Ichki guruh
              </div>
            </li>
          </ul>
        </li>

        <li className="nav-item nav-item-submenu" style={{ display: "none" }}>
          <div className="nav-link">
            <i className="icon-home4" />
            <span>Monitoring</span>
          </div>
          <ul className="nav nav-group-sub">
            <li className="nav-item">
              <a href={"index.html"} className="nav-link">Hisobotlar</a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Statistika
              </div>
            </li>
          </ul>
        </li>

        <li className="nav-item nav-item-submenu" style={{ display: "none" }}>
          <div className="nav-link">
            <i className="icon-home4" />
            <span>Xabarnoma</span>
          </div>
          <ul className="nav nav-group-sub">
            <li className="nav-item">
              <a href={"index.html"} className="nav-link">Online chat</a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                E'lon xabarnomasi
              </div>
            </li>
          </ul>
        </li>

        <li className="nav-item nav-item-submenu" style={{ display: "none" }}>
          <div className="nav-link">
            <i className="icon-home4" />
            <span>Keldi ketdi</span>
          </div>
          <ul className="nav nav-group-sub">
            <li className="nav-item">
              <a href={"index.html"} className="nav-link">Xodimlar</a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Telefon kitobi
              </div>
            </li>
          </ul>
        </li>

        <li className="nav-item nav-item-submenu" style={{ display: "none" }}>
          <div className="nav-link">
            <i className="icon-home4" />
            <span>Qabul</span>
          </div>
          <ul className="nav nav-group-sub">
            <li className="nav-item">
              <a href={"index.html"} className="nav-link">Rahbar qabuli</a>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Xodimlar qabuli
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                Fuqarolar qabuli
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div >
  )
}

export default React.memo(SidebarSection);