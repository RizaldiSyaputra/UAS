import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Typed from "typed.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const options = {
      strings: ["Programmer(Newbie)", "Gamer", "Manhwa Lover", "Student"],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };

    new Typed(".typing", options);
    new Typed(".typing-about", options);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#">
              MY <span>Portofolio</span>
            </a>
          </div>
          <ul className={`menu ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#home" className="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#data" className="menu-btn">
                Data
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn">
                About Me
              </a>
            </li>
            <li>
              <a href="#profile" className="menu-btn">
                Profile
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-btn" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>

      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Rizaldi Syaputra</div>
            <div className="text-3">
              And I'm a <span className="typing"></span>
            </div>
            <a href="https://wa.me/+6282169049882">Whatsapp me</a>
          </div>
        </div>
      </section>
      <section className="data" id="data">
        <h2 className="title">Data</h2>
        <p>
          Menyimpan Data ke Database dengan AJAX Untuk lebih memperjelas
          pemahaman anda bagaimana cara menyimpan data ke database dengan AJAX,
          anda akan diajak untuk berlatih. Pada latihan ini anda akan membuat
          sebuah form simpan satuan dan menyimpan data yang diinput oleh user
          dengan menggunakan Ajax. Pada contoh ini saya asumsikan anda memiliki
          sebuah tabel pada database anda dengan nama satuan dan dengan struktur
          seperti berikut.DB = cafe_anisya Langkah I. Membuat File Koneksi
          Simpan dengan nama koneksi.php Langkah II. Membuat HTML Form Pertama
          buatlah sebuah document baru dengan text editor anda, dan buat sebuah
          HTML form dengan script di bawah. Simpan dengan nama file satuan.php
          di direktory web server anda. Script di atas untuk membentuk sebuah
          form seperti berikut. Langkah III. Membuat File Javascript untuk
          Membentuk XMLHttpRequest Langkah selanjutnya adalah membuat JavaScript
          untuk membentuk XMLHttpRequest dan membuat function untuk mengirim
          data ke server. Buat kembali document baru dengan text editor anda dan
          ketik script berikut : Kemudian simpan dengan nama ajax.js di
          directory yang sama dengan file satuan.php yang dibuat sebelumnya.
          Langkah IV. Membuat handlePage dan Menyimpan Data Setelah selesai
          dengan langkah I dan II, selanjutnya adalah membuat handlePage untuk
          menangani data yang dikirim dan menyimpan data yang dikirim ke
          database. Perlu anda ingat, walaupun sebelum data dikirim telah
          divalidasi dengan javascript anda harus kembali melakukan validasi
          setelah data sampai di server dengan server side scripting seperti
          PHP. Ingat jangan pernah percaya kepada user anda dan jangan pernah
          percaya dengan apa yang diinputkan oleh user serta jangan percaya
          dengan apa yang dikirim oleh web browser anda. Sekarang buatlah sebuah
          document baru dengan text editor dan ketikkan script berikut.\ setelah
          selesai simpan dengan nama save_data.php di directory yang sama dengan
          file satuan.php. Langkah V. Finishing Setelah selesai membuat ketiga
          file di atas, sekarang buka kembali file contact.php dan edit pada
          bagian yang diberi warna biru seperti berikut :
          <input type="button" name="Button" value="Save" />
          menjadi
          <script type="text/javascript" src="ajax.js"></script>
          <input
            type="button"
            name="Button"
            value="Save"
            onclick="sendData('save_data.php','content'); return false;"
          />
          LATIHAN Silahkan anda buat program ajax untuk menyimpan data ke tabel
          berikut.
        </p>
      </section>

      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About Me</h2>
          <div className="about-content">
            <div className="column">
              <div className="text">
                I'm Aldi and I'm a <span className="typing-about"></span>
              </div>
              <p>
                Assalamu’alaikum Wr.Wb, Perkenalkan Saya Aldi berasal dari Kota
                Padang, saya sekarang berkuliah di Institut Teknologi Padang.
                Saat ini saya sedang mempelajari bahasa pemrograman seperti
                Python, PHP, Javascript, dan lain-lain. Saya mempunyai cita-cita
                untuk menjadi seorang programmer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile" id="profile">
        <div className="max-width">
          <h2 className="title">Profile</h2>
          <div className="profile-content">
            <div className="column">
              <p>
                <strong>Nama:</strong> Rizaldi Syaputra
              </p>
              <p>
                <strong>Tempat/Tanggal Lahir:</strong> Padang, 06 Oktober 2002
              </p>
              <p>
                <strong>NIM:</strong> 2022610008
              </p>
              <p>
                <strong>Jurusan:</strong> Teknik Informatika
              </p>
              <p>
                <strong>Universitas:</strong> Institut Teknologi Padang
              </p>
              <p>
                <strong>Asal Sekolah:</strong> SMAN 12 Padang
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact Me</h2>
          <div className="contact-content">
            <div className="left">
              <div className="text">↓Let's Talk↓</div>
              <p>
                Jika Anda ingin tahu lebih banyak tentang saya, silakan hubungi
                kontak di bawah ini.
              </p>
              <div className="info">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info-text">
                    <div className="head">Nama</div>
                    <div className="sub-title">Rizaldi Syaputra</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info-text">
                    <div className="head">Address</div>
                    <div className="sub-title">Padang, Indonesia</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info-text">
                    <div className="head">Email</div>
                    <div className="sub-title">rizaldiind08@gmail.com</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-phone"></i>
                  <div className="info-text">
                    <div className="head">No. Telp</div>
                    <div className="sub-title">+6282198765432</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="text">Message Me</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea placeholder="Message.." required></textarea>
                </div>
                <div className="button">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Created By Rizaldi Syaputra | © 2024 All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
