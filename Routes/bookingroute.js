const express= require("express")

const router= express.Router();

const{getAllBookings, get_booking_slot,booking,deleteBooking, update_booking}=require('../Controllers/bookingcontrols.js');
router.get("/bookingcontrols/all", getAllBookings);
router.get("/bookingcontrols/:GuestId", get_booking_slot);
router.post("/bookreservation", booking)
router.patch("/booking/:GuestId", update_booking)
router.delete("/booking/delete/:Reservationstatus",deleteBooking);

module.exports= router