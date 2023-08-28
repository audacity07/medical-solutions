import { Center, useToast } from "@chakra-ui/react";
import styles from "./admin.module.css";
import { FaArrowAltCircleLeft, FaSearch } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { Pending } from "./pending";

export function Admin() {
  const { logout, userInfo } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const toast = useToast();

  function handleLogout() {
    logout();
  }

  async function fetchUsersData(pageNumber = 1, search = null) {
    try {
      let url = `https://medical-solutions-server.onrender.com/users`;
      url += `?_page=${pageNumber || 1}&_limit=7`;
      if (search) {
        url += `&name_like=${search}`;
      }
      let response = await fetch(url);
      let totalData = response.headers.get("X-Total-Count");
      let limit = 6;
      let totalPages = Math.ceil(totalData / limit);

      let data = await response.json();
      console.log(data);
      if (data[0].id === 1) {
        setUserData(data.slice(1, data.length));
      } else {
        setUserData(data);
      }
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    }
  }

  function handleRefresh() {
    fetchUsersData();
    toast({
      position: "top",
      title: "Refresh successful",
      // description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <>
      <div className={styles.mainOuterContainer}>
        {/* <!-- left container --> */}
        <div className={styles.leftContainer}>
          <Center>
            <div className={styles.logoContainer}>
              <img src="logo.png" alt="logo" />
            </div>
          </Center>

          <div className={styles.adminCard}>
            <div className={styles.adminImageContainer}>
              <img src="admin_avatar.jpg" alt="admin image" />
            </div>
            <h4>Admin</h4>
          </div>

          <div className={styles.adminOptions}>
            <div className={styles.userCard}>
              <Center>
                <div className={styles.userIcon}>
                  <HiRefresh color="#616161" fontSize="23px" />
                </div>
              </Center>
              <p onClick={handleRefresh}>Refresh</p>
            </div>

            <a href="index.html">
              <div className={styles.destinationCard}>
                <Center>
                  <div className={styles.destinationIcon}>
                    <FaArrowAltCircleLeft color="#616161" />
                  </div>
                </Center>
                <p onClick={handleLogout}>Logout</p>
              </div>
            </a>
          </div>
        </div>
        {/* <!-- end of left container --> */}

        {/* <!-- right container --> */}
        <div className={styles.rightContainer}>
          {/* <!-- user table --> */}
          <div className={styles.userTable}>
            <div className={styles.searchCard}>
              <div>
                <FaSearch color="#a8a8a8" />
              </div>
              <input
                type="text"
                placeholder="Search user..."
                id="search-user-data"
                onChange={(e) => fetchUsersData(1, e.target.value)}
              />
            </div>

            {/* <!-- actual table --> */}
            <table>
              <thead className={styles.heading}>
                <tr className={styles.headRow}>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Dose 1</th>
                  <th>Dose 2</th>
                </tr>
              </thead>
              <tbody className={styles.bodyContainer}>
                {Object.keys(userData).length !== 0 &&
                  userData.map((item, ind) => (
                    <tr key={item.id} className={styles.tableRow}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        {item.dose1.status ? (
                          <button>
                            <span className={styles.editButton}>
                              Vaccinated
                            </span>
                          </button>
                        ) : (
                          <Pending
                            item={item}
                            className={
                              item.dose1.hospital === ""
                                ? styles.disabled
                                : styles.deleteButton
                            }
                            func={fetchUsersData}
                            disabled={item.dose1.hospital === "" ? true : false}
                          >
                            Pending
                          </Pending>
                        )}
                      </td>
                      <td>
                        {item.dose2.status ? (
                          <button>
                            <span className={styles.editButton}>
                              Vaccinated
                            </span>
                          </button>
                        ) : (
                          <Pending
                            item={item}
                            className={
                              // item.dose1.status === false &&
                              item.dose2.hospital === ""
                                ? styles.disabled
                                : styles.deleteButton
                            }
                            func={fetchUsersData}
                            disabled={item.dose2.hospital === "" ? true : false}
                          >
                            Pending
                          </Pending>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className={styles.pagination}>
              {new Array(totalPages).fill(0).map((_, ind) => (
                <button
                  key={ind}
                  className={styles.paginationButton}
                  onClick={() => fetchUsersData(ind + 1)}
                >
                  {ind + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* <!-- end of right container --> */}
      </div>
    </>
  );
}
