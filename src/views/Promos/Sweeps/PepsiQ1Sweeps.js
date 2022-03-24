import React from "react";

// Advana Color Theme
import { ThemeProvider } from "@material-ui/core";
import advanaTheme from "../../../advanaTheme";

import { makeStyles } from "@material-ui/core/styles";

import HeaderLinks from "../../../components/Header/HeaderLinks.js";
import ParallaxSweeps from "../../../components/Parallax/ParallaxSweeps.js";
import Header from "../../../components/Header/Header.js";
import Footer from "../../../components/Footer/Footer.js";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import styles from "../../../assets/jss/material-kit-react/views/sweepsRules";

const useStyles = makeStyles(styles);

export default function PepsiQ1Sweeps(props) {
  const { ...rest } = props;
  const classes = useStyles();

  return (
      <ThemeProvider theme={advanaTheme}>
        <div>
            <Header
                color="transparent"
                brand="Advana 404"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 200,
                    color: "white",
                }}
                {...rest}
            />
            <ParallaxSweeps
                small
            />
            <GridContainer>
                <GridItem className={classes.sweepsHeader} style={{ backgroundColor: "#f7f7f7", margin: "50px 10vw", borderRadius: "6px" }} xs={12} sm={12} md={12}>
                    <div style={{ padding: "50px" }}>
                        <h1 style={{ color: "#303f9f", margin: "60px 0 0 0", fontSize: "2.5rem", fontWeight: "700", textAlign: "center"}}>Micro Market Sweepstakes</h1>
                        <h2 style={{ fontWeight: "500", fontSize: "1.75rem", textAlign: "center", textDecoration: "underline"}}>Official Rules</h2>
                        <ul style={{ fontWeight: "500", margin: "30px 0" }}>
                        <li>NO PURCHASE OR PAYMENT OF ANY KIND IS NECESSARY TO ENTER OR WIN THIS SWEEPSTAKES. A PURCHASE OR PAYMENT OF ANY KIND WILL NOT INCREASE YOUR CHANCES OF WINNING.</li>
                        <li>VOID WHERE PROHIBITED BY LAW.</li>
                        <li>ALL DISPUTES WILL BE RESOLVED SOLELY BY BINDING ARBITRATION AND ENTRANTS WAIVE THE ABILITY TO BRING CLAIMS IN A CLASS ACTION FORMAT.</li>
                        </ul>
                        <p>
                            BY ENTERING (OR OTHERWISE PARTICIPATING IN) THE SWEEPSTAKES, ENTRANTS (AND A MINOR ENTRANT’S PARENT OR LEGAL GUARDIAN ON MINOR{"’"}S BEHALF) AGREE TO THESE OFFICIAL RULES, WHICH ARE A BINDING CONTRACT, SO READ THEM CAREFULLY BEFORE ENTERING.  WITHOUT LIMITATION, THIS CONTRACT INCLUDES INDEMNITIES TO THE SWEEPSTAKES ENTITIES FROM YOU AND A LIMITATION OF YOUR RIGHTS AND REMEDIES.
                        </p>
                        <p>
                            <b>1.  <span style={{ textDecoration: "underline" }}>Eligibility</span>.</b> &nbsp; The Micro Market Sweepstakes (the “Sweepstakes”) is open only to individuals who are legal residents and physically located in the fifty (50) states in the United States or the District of Columbia and who are at least eighteen (18) years of age or older at the time of entry (nineteen [19] years of age or older if a resident of Alabama or Nebraska) at the time of participation.  The following persons are not eligible to participate: Employees, contractors, directors and officers of Pepsi-Cola Company (“Sponsor”), its bottlers, PepsiCo, Inc., Advana, LLC (“Administrator”), and each of their respective parents, subsidiaries and affiliated companies, distributors, web design, advertising, fulfillment, judging and sweepstakes agencies involved in the administration, development, fulfillment and execution of this Sweepstakes (collectively, the “Sweepstakes Entities”), and the immediate family members (spouse, parent, child, sibling, grandparent, and/or “step”) of each and those living in their same households (those persons whether related or not who live in the same residence for at least three months during the twelve-month period preceding the start date of the Sweepstakes).  By participating in the Sweepstakes, each entrant (and a minor entrant’s parent or legal guardian on a minor’s behalf) unconditionally accepts and agrees to comply with and abide by these “Official Rules” and the decisions of Sponsor, including the interpretation of these Official Rules and its exercise of discretion, which will be final and binding in all respects.  Each minor entrant’s parent or legal guardian agrees to be bound by these Official Rules both individually and on behalf of the minor entrant.
                        </p>
                        <p>
                            <b>2.  <span style={{ textDecoration: "underline" }}>Sweepstakes Timing</span>.</b> &nbsp; The Sweepstakes begins on or about 12:00:00 p.m. Eastern Time (“ET”) on March 5, 2022 and all entries must be received by the Administrator on or before 11:59:59 p.m. ET on April 1, 2022 (the “Entry Period”).
                        </p>
                        <p>
                            <b>3.  <span style={{ textDecoration: "underline" }}>How to Enter</span>.</b> &nbsp; There are two (2) methods of entry for this Sweepstakes, and you may enter as follows: 
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    <p>
                                        <b>(i)	App Method of Entry.</b>  To participate and enter this Sweepstakes via mobile app, individuals will need a mobile device (e.g., mobile phone or tablet) that uses either the Apple or Android platform.  Additionally, individuals will need to download the 365Pay or Connect {"&"} Pay application (“App”) from their mobile device’s app store and sign up for a 365Pay or Connect {"&"} Pay account (“Account”) if you do not already have an Account.  Creating an Account is free.  By submitting your information and creating an Account however, entrants will be required to agree to the App’s terms of service and privacy policy.  If you do not agree to the terms of service and privacy policy, you cannot create an Account or participate in this Sweepstakes via App.  After signing up for an Account, log-in to your Account and following the call-to-action provided in any advertising for the Sweepstakes on how to receive an entry.  The call-to-action for this Sweepstakes will require entrants to purchase any eligible:
                                            <ul style={{ margin: "20px 0" }}>
                                                <li>
                                                    Pepsi Zero Sugar 20oz – UPC: 012000018800
                                                </li>
                                                <li>
                                                    LIFEWTR 20oz – UPC: 012000171635
                                                </li>
                                                <li>
                                                    Mountain Dew Zero 20oz –UPC:  012000191435
                                                </li>
                                            </ul>
                                        products using your Account via the App in participating locations. 
                                        </p>
                                </li>
                                <li>
                                    <p>
                                        <b>(ii)	Mail-In Entry.</b>  Legibly hand print on a 3” x 5” card your full name, complete address, home and daytime  telephone numbers (including area code), e-mail address and date of birth and mail it with proper postage to: Advana, LLC, c/o Micro Market Sweeps, 1743 Maplelawn Dr., Troy MI 48084 (Attn: Advana Micro Market Sweepstakes Mail-In Entry). <b>TO PROTECT YOUR PRIVACY, WE RECOMMEND YOU SEND THE 3” x 5” CARD IN AN ENVELOPE.</b>  Each mail-in entry must be submitted to Administrator at the address above in a separate envelope (or item of mail). All mail-in entries must be postmarked by April 1, 2022 and received no later than April 4, 2022 to be eligible for the Sweepstakes.
                                    </p>
                                </li>
                            </ul>
                            <b>Limit of three (3) entries per day per person (regardless of method)</b> will be accepted. Subsequent attempts made by the same individual to submit multiple entries by using multiple or false contact information, accounts or otherwise may result in the entrant being disqualified.  Entries generated by a script, computer programs, macro, programmed, robotic or other automated means are void and may be disqualified.  Entries that are in excess of the stated limits, incomplete, illegible, corrupted, damaged, destroyed, forged, false, lost, late or misdirected, deceptive or otherwise not in compliance with the Official Rules may be disqualified from the Sweepstakes at Administrator’s sole and absolute discretion.  Entries submitted by entrants who do not meet the eligibility requirements (including all requirements with respect to age and residence) are void.  All materials submitted become the physical property of Administrator and will not be returned.  In the event of a dispute over the identity of an online entrant, entry will be deemed submitted by the registered account holder of the email address associated with the entry for the domain associated with the submitted address provided that person is eligible.  Winners may be required to show proof of being the registered account holder.  Registered account holder is defined as the person assigned to an email address by an Internet access provider, on-line service provider or other organization responsible for assigning email addresses.  In the event a dispute regarding the identity of the individual who actually submitted an entry cannot be resolved to Administrator’s satisfaction, the affected entry will be deemed ineligible.  The Administrator’s designated database clock will be the official timekeeper for this Sweepstakes.  Those who do not follow all of the instructions, provide the required information in their entry form, or abide by these Official Rules or other instructions of Administrator may be disqualified.  The Sweepstakes Entities may run multiple campaigns, contests, sweepstakes or other promotions simultaneously.  Entry into one (1) campaign, contest or sweepstakes does not constitute entry into any other. 
                        </p>
                        <p>
                            <b>4. <span style={{ textDecoration: "underline" }}>Winner Selection and Prize Claiming</span>.</b> &nbsp; There will be 5 total winners selected in this Sweepstakes.  The potential winners will be selected through a random drawing on or about April 29, 2022 from all eligible entries received in accordance with these Official Rules.  Administrator will have complete discretion over interpretation of the Official Rules, of administration of the Sweepstakes, and of selection of the winner(s).  Decisions of the Administrator as to the selection of the winners will be final.  The potential winners will be notified using the information provided during entry by any of email, telephone, mail, a post on the potentially winning entry or through a direct message on a social media platform (if applicable) (method to be selected by Administrator in its sole discretion) in a commercially reasonable time after the drawing.  The Sweepstakes Entities are not responsible for false, incorrect, changed, incomplete or illegible contact information.  Notification is deemed to have occurred immediately upon sending of an email, placing of a phone call, one (1) day after sending via a delivery service or two (2) days after mailing.  A potential winner who provides a P.O. Box may be required to provide an alternative address and this may cause a delay in notification and acceptance, so use of a P.O. Box is discouraged.  The Sweepstakes Entities are not responsible for electronic communications that are undeliverable as a result of any form of active or passive filtering of any kind, or insufficient space in entrant’s email account to receive email messages.  
                        </p>
                        <p>
                            Each potential winner may be required to submit an affidavit of eligibility / release of liability / prize acceptance agreement (collectively, the “<b>Affidavit</b>”) and return the Affidavit within the time period specified at notification before being eligible to receive his or her prize(s).  If any potential winner fails or refuses to sign and return such Affidavit within the time period required by Administrator or if the prize or prize notification is returned as rejected, faulty, unclaimed or returned as undeliverable to such potential winner, such potential winner may be disqualified and an alternate may be selected.  Non-compliance shall result in disqualification and award of the prize(s) to an alternate winner.  Parents or legal guardians of any winner under the age of majority in their state/jurisdiction of residence (which is eighteen [18] in most states but is nineteen [19] in Alabama and Nebraska) may be required to also sign the Affidavit in order for the winner to be qualified to receive his or her prize(s).  If any potential winner is found to be ineligible, or if he or she has not complied with these Official Rules, or if the potential winner cannot attend or participate in any portion of the prize, or declines a prize for any reason prior to award, such potential winner may be disqualified and an alternate potential winner may be selected.  If, for any reason, more bona fide winners come forward seeking to claim prizes in excess of the number of each type of prize set forth in these Official Rules, the winners, or remaining winners, as the case may be, of the advertised number of prizes available may be selected in a random drawing from among all persons making purportedly valid claims for such prize(s).  Inclusion in such drawing shall be each entrant’s sole and exclusive remedy under such circumstances.  The Sweepstakes Entities are not responsible for and shall not be liable for late, lost, damaged, intercepted, misdirected, or unsuccessful efforts to notify the potential winners, or if potential winner is a minor, for late, lost, misdirected, or unsuccessful efforts of potential winner to provide signed parental or guardian consent. 
                        </p>
                        <p>
                            <b>5. <span style={{ textDecoration: "underline" }}>Odds</span>.</b> &nbsp; Odds of winning will depend upon the total number of entries received during the Entry Period.
                        </p>
                        <p>
                            <b>6. <span style={{ textDecoration: "underline" }}>Prizes and Values</span>.</b> &nbsp; The prizes to be awarded in this Sweepstakes are as follows:
                        </p>
                        <p>
                        (i) Grand Prizes (5) total: Each winner shall receive twelve (12) $50 Credits to their 365Pay or Connect {"&"} Pay account each month for a total of twelve (12) months to be used on select PepsiCo beverages. Approximate Retail Value (“ARV”) of each prize: $599.99. Winner must accept prize as stated or the prize will be forfeited. Eligible products include:
                            <ul style={{ margin: "20px 0" }}>
                                <li>
                                    Pepsi Trademark
                                </li>
                                <li>
                                    LIFEWTR Trademark
                                </li>
                                <li>
                                    Mountain Dew Trademark
                                </li>
                                <li>
                                    Bubly Trademark
                                </li>
                                <li>
                                    Lipton Trademark
                                </li>
                            </ul>
                        </p>
                        <p>
                            <b>7. <span style={{ textDecoration: "underline" }}>Publicity Release</span>.</b> &nbsp; Subject to applicable law, winners irrevocably grant the Sweepstakes Entities and each of their licensees, and its and their successors, assigns and sub-licensees the right and permission to use their name, voice, likeness and/or biographical material for advertising, promotional and/or publicity purposes in connection with the Sweepstakes, in all forms of media and by all manners (now and hereafter known), and on and in connection with related products, services, advertising and promotional materials (now known or hereafter developed), worldwide, in perpetuity, without any obligation, notice or consideration except for the awarding of the prizes to the winners.
                        </p>
                        <p>
                            <b>8. <span style={{ textDecoration: "underline" }}>Tampering with Sweepstakes</span>.</b> &nbsp; The Sweepstakes Entities are not responsible for the actions of entrants in connection with the Sweepstakes, including entrants’ attempts to circumvent the Official Rules or otherwise interfere with the administration, security, fairness, integrity or proper conduct of the Sweepstakes.  Persons found tampering with or abusing any aspect of this Sweepstakes, or whom Administrator believes to be causing malfunction, error, disruption or damage may be disqualified.  Additionally, any attempt to cheat the Sweepstakes, as determined at the sole and absolute discretion of Administrator, may result in immediate disqualification of the entrant, as well as other possible consequences, including disqualification from any and all existing and future sweepstakes.  ANY ATTEMPT BY A PERSON TO DAMAGE ANY WEBSITE (INCLUDING ANY SOCIAL MEDIA PLATFORM OR APPLICATION) OR UNDERMINE THE LEGITIMATE OPERATION OF THIS SWEEPSTAKES MAY BE A VIOLATION OF CRIMINAL AND CIVIL LAWS AND SHOULD SUCH AN ATTEMPT BE MADE, ADMINISTRATOR RESERVES THE RIGHT TO SEEK ALL LEGAL AND EQUITABLE REMEDIES FROM AND AGAINST ANY SUCH PERSON TO THE FULLEST EXTENT PERMITTED BY LAW.  Administrator reserves the right, at its sole and absolute discretion, to disqualify (or terminate the prize of) any individual who is found to be, or suspected of, acting in violation of these Official Rules, or to be acting in an unsportsmanlike, obscene, immoral or disruptive manner, or with the intent to annoy, abuse, threaten or harass any other person.
                        </p>
                        <p>
                            <b>9. <span style={{ textDecoration: "underline" }}>Suspension / Modification / Termination</span>.</b> &nbsp; In the event Administrator is prevented from continuing with the Sweepstakes by any event beyond its control, including, but not limited to, fire, flood, epidemic, earthquake, explosion, labor dispute or strike, act of God or public enemy, communications or equipment failure, utility or service interruptions, riot or civil disturbance, terrorist threat or activity, war (declared or undeclared), interference with the Sweepstakes by any party, or any federal, state, local or provincial government law, order, or regulation, order of any court or jurisdiction, or other cause not reasonably within Administrator’s control (each a “Force Majeure” event or occurrence), Administrator shall have the right to modify, suspend or terminate the Sweepstakes or prize.  Administrator additionally reserves the right, in its sole and absolute discretion: (a) to modify, suspend or terminate the Sweepstakes should causes beyond Administrator’s control corrupt or interfere with the administration, integrity, operation, security or proper play of the Sweepstakes; or (b) to disqualify any entrant found to be, or suspected of: (i) tampering with the entry process or the operation of the Sweepstakes; (ii) acting in violation of these Official Rules; or (iii) acting in an un-sportsmanlike manner.
                        </p>
                        <p>
                            <b>10. <span style={{ textDecoration: "underline" }}>Waivers, Disclaimers and Releases</span>.</b> &nbsp; By participating in the Sweepstakes, entrant agrees to release, discharge, indemnify and hold harmless the Sweepstakes Entities and each of their respective directors, officers, employees, agents, successors and assigns (“Released Parties”) from and against any and all claims, liability, costs (including attorneys’ fees), losses, damages, fines or injuries (up to and including bodily injury and death) of any kind arising out of or related to: (i) entrants’ participation in the Sweepstakes (including travel to/from any Sweepstakes activity); (ii) any acceptance, possession, misuse or use of any prize (including, without limitation, losses, damages or injuries to entrant’s or any other person’s equipment or other property, or to their persons, including those arising from any travel to/from any prize event or activity); (iii) the Released Parties’ violation of rights of publicity or privacy, claims of defamation or portrayal in a false light or based on any claim of infringement of intellectual property; and (iv) any typographical, human or other error in the printing, offering, selection, operation or announcement of any Sweepstakes activity and/or prize.  Without limiting the generality of the foregoing, entrants agree that the Released Parties have neither made nor will be in any manner responsible or liable for any warranty, representation or guarantee, express or implied, in fact or in law, in connection with the Sweepstakes and/or with respect to prizes, including, without limitation, to any prize’s quality or fitness for a particular purpose.  Entrants agree and that the Released Parties shall have no responsibility or liability for discontinued prizes; human error; incorrect or inaccurate transcription of registration and/or account information; any technical malfunctions of the telephone network, computer online system, computer dating mechanism, computer equipment, software, or Internet service provider utilized by Administrator interruption or inability to access the website, application or any online service via the Internet due to hardware or software compatibility problems; any damage to participant’s (or any third person’s) computer and/or its contents related to or resulting from any part of the Sweepstakes; any lost/delayed data transmissions, omissions, interruptions, viruses, bugs, defects; and/or any other errors or malfunctions, even if caused by the negligence of the Released Parties.  Each entrant further agrees to indemnify and hold harmless the Released Parties from and against any and all liability resulting or arising from the Sweepstakes and to release all rights to bring any claim, action or proceeding against Released Parties and hereby acknowledge that the Released Parties have neither made nor are in any manner responsible or liable for any warranty, representation or guarantee, express or implied, in fact or in law, relative to a prize, including express warranties provided exclusively by a prize supplier that may be sent along with a prize.  The Released Parties are not responsible for any changes or unavailability of the social media platform used for purposes of administering this Sweepstakes that may interfere with the Sweepstakes (including any limitations, any restrictions, or any conditions on Administrator’s ability to use the social media platform for the Sweepstakes as set forth herein that are not acceptable to Administrator) or ability of entrant to timely enter, receive notices or communicate with Administrator via the social media platform, in which case Administrator, in its sole discretion, may terminate or modify the Sweepstakes.  If entrant is a minor, his/her parent or legal guardian must agree to these Official Rules, including, without limitation, this Section.
                        </p>
                        <p>
                            <b>11. <span style={{ textDecoration: "underline" }}>Entry Information and Sweepstakes Communications</span>.</b> &nbsp; As a condition of entering the Sweepstakes, each entrant gives consent for Administrator to obtain and deliver his or her name, address and other information to third parties for the purpose of administering this Sweepstakes and to comply with applicable laws, regulations and rules.  Any information entrant provides to Administrator may be used to communicate with entrant in relation to this Sweepstakes or on a Sweepstakes winner’s list. 
                        </p>
                        <p>
                            <b>12. <span style={{ textDecoration: "underline" }}>Governing Law / Limitation of Liability</span>.</b> &nbsp; All issues and questions concerning the construction, validity, interpretation and enforceability of these Official Rules or the rights and obligations of entrants, Administrator or the Released Parties in connection with the Sweepstakes will be governed by and construed in accordance with the internal laws of the State of New York, without giving effect to any choice of law or conflict of law rules or provisions that would cause the application of any other laws.
                            <br/><br/>
                            BY ENTERING THE SWEEPSTAKES, ENTRANT AGREES THAT TO THE EXTENT PERMITTED BY APPLICABLE LAW: (A) ANY AND ALL DISPUTES, CLAIMS AND CAUSES OF ACTION ARISING OUT OF OR CONNECTED WITH THE SWEEPSTAKES, OR ANY PRIZE AWARDED, WILL BE RESOLVED INDIVIDUALLY, WITHOUT RESORT TO ANY FORM OF CLASS ACTION; (B) ANY AND ALL CLAIMS, JUDGMENTS AND AWARDS WILL BE LIMITED TO ACTUAL THIRD-PARTY, OUT-OF-POCKET COSTS INCURRED (IF ANY) NOT TO EXCEED TEN DOLLARS ($10.00), BUT IN NO EVENT WILL ATTORNEYS’ FEES BE AWARDED OR RECOVERABLE; (C) UNDER NO CIRCUMSTANCES WILL ANY ENTRANT BE PERMITTED TO OBTAIN ANY AWARD FOR, AND ENTRANT HEREBY KNOWINGLY AND EXPRESSLY WAIVES ALL RIGHTS TO SEEK, PUNITIVE, INCIDENTAL, CONSEQUENTIAL OR SPECIAL DAMAGES, LOST PROFITS AND/OR ANY OTHER DAMAGES, OTHER THAN ACTUAL OUT OF POCKET EXPENSES NOT TO EXCEED TEN DOLLARS ($10.00), AND/OR ANY RIGHTS TO HAVE DAMAGES MULTIPLIED OR OTHERWISE INCREASED; AND (D) ENTRANTS’ REMEDIES ARE LIMITED TO A CLAIM FOR MONEY DAMAGES (IF ANY) AND ENTRANT IRREVOCABLY WAIVES ANY RIGHT TO SEEK INJUNCTIVE OR EQUITABLE RELIEF.  SOME JURISDICTIONS DO NOT ALLOW THE LIMITATIONS OR EXCLUSION OF LIABILITY, SO THE ABOVE MAY NOT APPLY TO YOU.
                        </p>
                        <p>
                            <b>13. <span style={{ textDecoration: "underline" }}>Dispute Resolution</span>.</b> &nbsp; The parties each agree to finally settle all disputes only through arbitration; provided, however, the Administrator shall be entitled to seek injunctive or equitable relief in the state and federal courts in Oakland County, Michigan, and any other court with jurisdiction over the parties.  In arbitration, there is no judge or jury and review is limited.  The arbitrator’s decision and award is final and binding, with limited exceptions, and judgment on the award may be entered in any court with jurisdiction.  The parties agree that, except as set forth above, any claim, suit, action or proceeding arising out of or relating to this Sweepstakes shall be resolved solely by binding arbitration before a sole arbitrator under the streamlined Arbitration Rules Procedures of JAMS Inc. (“JAMS”) or any successor to JAMS.  In the event JAMS is unwilling or unable to set a hearing date within fourteen (14) days of the filing of a “Demand for Arbitration”, then either party can elect to have the arbitration administered by the American Arbitration Association (“AAA”) or any other mutually agreeable arbitration administration service.  If an in-person hearing is required, then it will take place in Oakland County, Michigan.  The federal or state law that applies to these Official Rules will also apply during the arbitration.  Disputes will be arbitrated only on an individual basis and will not be consolidated with any other proceedings that involve any claims or controversy of another party, including any class actions; provided, however, if for any reason any court or arbitrator holds that this restriction is unconscionable or unenforceable, then the agreement to arbitrate doesn’t apply and the dispute must be brought in a court of competent jurisdiction in Oakland County, Michigan.  Administrator agrees to pay the administrative and arbitrator’s fees in order to conduct the arbitration (but specifically excluding any travel or other costs of entrant to attend the arbitration hearing).  Either party may, notwithstanding this provision, bring qualifying claims in small claims court.
                        </p>
                        <p>
                            <b>14. <span style={{ textDecoration: "underline" }}>List of Sweepstakes Winners</span>.</b> &nbsp; To receive a list of winners, send a stamped, self-addressed envelope, within sixty (60) days of expiration of the Entry Period, to: “Micro Market Sweepstakes Winners List”, Advana, LLC 1743 Maplelawn Dr., Troy MI 48084.
                        </p>
                        <p>
                            <b>15. <span style={{ textDecoration: "underline" }}>Miscellaneous</span>.</b> &nbsp; The invalidity or unenforceability of any provision of these Official Rules or the Affidavit will not affect the validity or enforceability of any other provision.  In the event that any provision of the Official Rules or the Affidavit is determined to be invalid or otherwise unenforceable or illegal, the other provisions will remain in effect and will be construed in accordance with their terms as if the invalid or illegal provision were not contained herein.  Administrator’s failure to enforce any term of these Official Rules will not constitute a waiver of that provision.  Entrants agree to waive any rights to claim ambiguity of these Official Rules.  Headings are solely for convenience of reference and will not be deemed to affect in any manner the meaning or intent of the documents or any provision hereof.  In the event there is a discrepancy or inconsistency between disclosures or other statements contained in any Sweepstakes-related materials, privacy policy or terms of use on any website, social media platform or application and/or the terms and conditions of the Official Rules, the Official Rules shall prevail, govern, and control and the discrepancy will be resolved in Administrator’s sole and absolute discretion.
                        </p>
                        <p>
                            <b>16. <span style={{ textDecoration: "underline" }}>Identification of Administrator</span>.</b> &nbsp; Advana, LLC 1743 Maplelawn Dr., Troy MI 48084
                        </p>
                        <p>
                            <b>17. <span style={{ textDecoration: "underline" }}>Identification of Sponsor</span>.</b> &nbsp; Pepsi-Cola Company, 700 Anderson Hill Road, Purchase, New York 10577.
                        </p>
                        <p>All brands are the property of their respective owners.</p>
                    </div>
                </GridItem>
                <Footer />
            </GridContainer>
        </div>
      </ThemeProvider>
  );
}
