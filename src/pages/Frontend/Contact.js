import { useRef } from "react";
import { ReactTyped } from "react-typed";
import { IoHome, IoCall, IoMail } from "react-icons/io5";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wscm9xk", "template_oknt8ls", form.current, {
        publicKey: "QoC6CHp31bTr3xr8h",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.target.reset();
  };

  return (
    <>
      <section className="container-fluid contact ">
        <div className="container contact-body">
          <div className="row">
            <div className="col-12">
              <div className="heading text-center">
                <h2>
                  lets start{" "}
                  <span>
                    {" "}
                    <ReactTyped
                      strings={["conversation"]}
                      typeSpeed={80}
                      deletespeed={10}
                      loop
                    />{" "}
                  </span>{" "}
                </h2>
              </div>
            </div>
          </div>

          <div class="row p-5  ">
            <div class=" col-md-6 col-12   contact-body1">
              <div className="details">
                <div class="body d-flex">
                  <div className="icon ">
                    <IoHome />
                  </div>
                  <div className="text">
                    <h2>Address</h2>
                    <h4>Lahore</h4>
                  </div>
                </div>
                <div class="body d-flex">
                  <div className="icon ">
                    <IoCall />
                  </div>
                  <div className="text">
                    <h2>Phone</h2>
                    <h4>+92 3182483175</h4>
                  </div>
                </div>
                <div class="body d-flex">
                  <div className="icon ">
                    <IoMail />
                  </div>
                  <div className="text">
                    <h2>Email</h2>
                    <h4>zohaibimtiaz119@gmail.com</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class=" col-md-6 col-12  contact-message ">
              <div className="contactForm">

                <form  ref={form} onSubmit={sendEmail}>
                  <input
                    type="hidden"
                    name="access_key"
                    value="730d8a1e-f462-4401-9c76-0ee324bfeac9"
                  />

                  <h3>Send message</h3>

                  <div className="inputBox">
                    <input type="text" name="name" required="required" />
                    <span>Full Name</span>
                  </div>
                  <div className="inputBox">
                    <input type="email" name="email" required="required" />
                    <span>Email</span>
                  </div>
                  <div className="inputBox">
                    <textarea
                      name="message"
                      id=""
                      required="required"
                    ></textarea>
                    <span>Type your message</span>
                  </div>
                  <div className="inputBox">
                  <input
                    type="submit"
                    name=""
                    required="required"
                    value="send"
                  />
                </div>
                </form>
                {/* <div className="inputBox">
                  <input
                    type="submit"
                    name=""
                    required="required"
                    value="send"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
