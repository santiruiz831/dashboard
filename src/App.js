import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import Card from "./components/Card/Card";

function App() {
  let characters = [
    {
      name: "Asoka",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/ahsoka.jpg"
    },
    { name: "Anakin",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/anakin.jpg"
     },
    { 
      name: "Batman", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/batman.jpg" 
    },
    { 
      name: "Capitan America", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/capAmerica.jpg"  
    },
    { 
      name: "Cell", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/cell.jpg"  
     },
    { name: "Hulk Small",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/hulkSmall.jpg"
     },
    { 
      name: "Kyloren", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/kyloRen.jpg"
     },
    { 
      name: "Luke", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/luke.jpg" 
    },
    { 
      name: "Obiwan", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/obiwan.jpg" 
    },
    { 
      name: "Strange",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/strange.jpg" 
    },
    { 
      name: "Superman",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/superman.jpg" 
    },
    { 
      name: "Vegetta", 
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/vegetta.jpg" 
    },
    { 
      name: "yoda",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?",
      cover: "/images/characters/yoda.jpg" },
  ];

  let dashboardInfo =[
    {title:"PRODUCTS IN DATA BASE",
    number:"135",
    icon:"fas fa-clipboard-list fa-2x text-gray-300",
    className:"card border-left-primary shadow h-100 py-2 ",
    titleClassName:"text-xs font-weight-bold text-primary text-uppercase mb-1"},
  { title:"AMOUNT IN PRODUCTS",
  number:"$546.456",
  icon:"fas fa-dollar-sign fa-2x text-gray-300",
  className:"card border-left-success shadow h-100 py-2 ",
  titleClassName:"text-xs font-weight-bold text-success text-uppercase mb-1"},
  {
    title:"USERS QUANTITY",
    number:"38",
    icon:"fas fa-user-check fa-2x text-gray-300",
    className:"card border-left-warning shadow h-100 py-2 ",
    titleClassName:"text-xs font-weight-bold text-warning text-uppercase mb-1"
  }
  ]

  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content">
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i className="fa fa-bars"></i>
          </button>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="alertsDropdown"
              >
                <i className="fas fa-bell fa-fw"></i>

                <span className="badge badge-danger badge-counter">3+</span>
              </a>
            </li>

            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="messagesDropdown"
              >
                <i className="fas fa-envelope fa-fw"></i>

                <span className="badge badge-danger badge-counter">7</span>
              </a>
            </li>

            <div className="topbar-divider d-none d-sm-block" />

            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="userDropdown"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Walter White
                </span>
                <img
                  className="img-profile rounded-circle"
                  src="/images/dummy-avatar.jpg"
                  width="60"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>

          <div className="row">
            {/* <Topbar
              title="PRODUCTS IN DATA BASE"
              number="135"
              icon="fas fa-clipboard-list fa-2x text-gray-300"
              className="card border-left-primary shadow h-100 py-2 "
              titleClassName="text-xs font-weight-bold text-primary text-uppercase mb-1"
            />
            <Topbar
              title="AMOUNT IN PRODUCTS"
              number="$546.456"
              icon="fas fa-dollar-sign fa-2x text-gray-300"
              className="card border-left-success shadow h-100 py-2 "
              titleClassName="text-xs font-weight-bold text-success text-uppercase mb-1"
            />
            <Topbar
              title="USERS QUANTITY"
              number="38"
              icon="fas fa-user-check fa-2x text-gray-300"
              className="card border-left-warning shadow h-100 py-2 "
              titleClassName="text-xs font-weight-bold text-warning text-uppercase mb-1"
            /> */}
            {dashboardInfo.map((element,idx)=> <Topbar title={element.title} number={element.number} icon={element.icon} className={element.className} titleClassName={element.titleClassName} />)}
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Last product in Data Dase
                  </h6>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                      //style="width: 25rem;"
                      src="/images/product_dummy.svg"
                      alt=""
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores, consequatur explicabo officia inventore libero
                    veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                    voluptatum non corporis quae dolorem culpa exercitationem
                    ratione?
                  </p>
                  <a target="_blank" rel="nofollow" href="/">
                    View product detail
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <Categories />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          
          <h3 className="h3"> Personajes de películas</h3>


          <div className="row card-container">

            {characters.map((element, idx) => <Card name={element.name} description={element.desc} cover={element.cover} />)}

            <Card name={characters[0].name} description={characters[0].desc} cover={characters[0].cover}/>
          </div>
          
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
