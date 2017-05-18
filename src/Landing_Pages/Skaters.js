import React, { Component } from "react";
import "../css/Skaters.css";

class Skaters extends Component {
  render() {
    return (
      <div className="pageSkaters">
        <h1>SKATER SEARCH</h1>
        <form className="skaterSearch" action="index.php?=21" method="post">
          <div className="country ">
            <label>Country </label>
            <select name="n">
              <option value="9999">ALL</option>
              <option value="47">ARG-Argentina</option>
              <option value="55">ARM-Armenia</option>
              <option value="1">AUS-Australia</option>
              <option value="2">AUT-Austria</option>
              <option value="71">AZE-Azerbaijan</option>
              <option value="3">BEL-Belgium</option>
              <option value="4">BIH-Bosnia & Herzegovena</option>
              <option value="5">BLR-Belarus</option>
              <option value="62">BRA-Brazil</option>
              <option value="6">CAN-Canada</option>
              <option value="51">CHI-Chile</option>
              <option value="7">CHN-China</option>
              <option value="48">COL-Colombia</option>
              <option value="8">CRO-Croatia</option>
              <option value="9">CZE-Czeh Rebulic</option>
              <option value="10">DEN-Denmark</option>
              <option value="11">ESP-Spain</option>
              <option value="45">EST-Estonia</option>
              <option value="12">FIN-Finland</option>
              <option value="13">FRA-France</option>
              <option value="56">FRO-Faröes</option>
              <option value="14">GBR-Britain</option>
              <option value="15">GEO-Georgia</option>
              <option value="16">GER-Germany</option>
              <option value="57">GRE-Greece</option>
              <option value="53">HKG-Hong Kong</option>
              <option value="18">HUN-Hungary</option>
              <option value="61">IBV-British Virgin Islands</option>
              <option value="46">IND-India</option>
              <option value="57">IRI-Iran</option>
              <option value="43">IRL-Ireland</option>
              <option value="19">ISL-Iceland</option>
              <option value="20">ISR-Isreal</option>
              <option value="21">ITA-Italy</option>
              <option value="22">JPN-Japan</option>
              <option value="23">KAZ-Kazakhstan</option>
              <option value="52">KEN-Kenya</option>
              <option value="54">KGZ-Kyrgyzstan</option>
              <option value="24">KOR-Korea</option>
              <option value="25">LAT-Latvia</option>
              <option value="26">LIT-Lithuania</option>
              <option value="27">LUX-Luxembourg</option>
              <option value="58">MAR-Morocco</option>
              <option value="28">MEX-Mexico</option>
              <option value="29">MGL-Mongolia</option>
              <option value="30">NED-Netherlands</option>
              <option value="31">NOR-Norway</option>
              <option value="30">NED-Netherlands</option>
              <option value="32">NZL-New Zealand</option>
              <option value="59">PAN-Panama</option>
              <option value="66">PHI-Phillippines</option>
              <option value="33">POL-Poland</option>
              <option value="34">POR-Portugal</option>
              <option value="35">PRK-North Korea</option>
              <option value="64">QAT-Qatar</option>
              <option value="36">ROU-Romania</option>
              <option value="37">RSA-South Africa</option>
              <option value="38">RUS-Russia</option>
              <option value="69">SIN-Singapore</option>
              <option value="63">SRI-Sri Lanka</option>
              <option value="39">SUI-Switzerland</option>
              <option value="49">SVK-Slovakia</option>
              <option value="40">SWE-Sweden</option>
              <option value="65">TAN-Tanzania</option>
              <option value="70">THA-Thailand</option>
              <option value="50">TKM-Turkmenistan</option>
              <option value="44">TPE-Chinese Taipei</option>
              <option value="50">TKM-Turkmenistan</option>
              <option value="60">TUR-Turkey</option>
              <option value="41">UKR-Ukine</option>
              <option value="42">USA-United States</option>
            </select>
          </div>
          <div className="gender">
            <label>Ladies/Men </label>
            <select name="g">
              <option value="9999" selected="selected">ALL</option>
              <option value="0">Ladies</option>
              <option value="1">Men</option>
            </select>
          </div>
          <div className="given">
            <label>Given Name </label>
            <input type="text" name="fn" value maxlength="60" size="40" />
          </div>
          <div className="family">
            <label>Family Name </label>
            <input type="text" name="ln" value maxlength="60" size="40" />
          </div>
          <div className="submit">
            <button type="submit" value="Select">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = Skaters;
