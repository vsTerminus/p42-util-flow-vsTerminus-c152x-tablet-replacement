# p42-util-flow-vsTerminus-c152x-tablet-replacement
Flow Pro Widgets for MSFS which replace the functionality of the default JPL/WBSim C152

## About

These are the raw JS files used in my Flow Pro widgets for the JPL / WBSim Cessna 152.

There is a conflict somewhere between Flow and the 152's EFB/Tablet which causes performance to rapidly degrade until the game is unplayable. One solution to this problem is to disable Flow whenever you fly the 152. Another solution is to disable the 152's tablet, but then you're left without the ability to toggle instruments, external items, and manage all of the state saving and maintenance features of the plane.

This Flow project replaces the tablet's functionality with Flow Widgets.

## Screenshots
![State & Maintenance Wheel](img/State%20%26%20Maintenance%20Wheel.png)

![Visibility Toggles Wheel](img/Visibility%20Toggles%20Wheel.png)

## Features

These widgets should replace all functionality from the default tablet.

### State & Maintenance

- **Toggle State Saving**
    - When you start a new flight the plane will attempt to restore it to exactly the way you left it at the end of your last flight
    - Note: State Saving is *per-livery*, so you can treat each livery as its own separate plane
- **Toggle Realism/Maintenance Mode**
    - Engine will wear out over time and need repairs
    - Oil will need to be checked and filled
    - Battery can drain and may need charging
    - Pitot tube can become blocked (Don't forget the cover at the end of your flight!)
    - etc. (I don't actually know everything that this enables)
- **Engine Monitor/Repair**
    - Hovering will show current engine health
    - While parked, click this widget to repair the engine
- **Oil Monitor/Refill**
    - Hovering will show the current oil levels
    - Whiel parked, click this widget to refill the oil
- **Battery Monitor/Charger**
    - Hovering will show current battery charge.
    - Icon will change to reflect the battery's current charge for "at a glance" reading
    - While parked, clicking the widget will attempt to charge the battery.
        - Note: Battery switch must be on or it will not charge!
- **Rudder Trim Tab**
    - Hovering will show current trim %
    - Icon will update to reflect which direction the trim is set (Left, Right, Centered)
    - Must be set while parked
    - Allows 0-100% left or right adjustment
    - Use the scroll wheel (Up for Right, Down for Left)
- **Ready To Fly**
    - This is the "Auto Start" button
    - The plane will go through the steps to start itself up
- **Cold & Dark**
    - The opposite of Ready to Fly, this shuts everything down
- **Parking Monitor**
    - Many things in this plane and in these widgets rely on knowing whether the plane is "parked"
    - "Parked" in this case means on the ground, engine off, not moving.
    - This widget monitors these conditions and sets the correct variable so the plane knows it is parked.

### Visibility Toggles

- **GTN 750 GPS**
    - Toggles the PMS GTN 750 display instead of the standard radio stack, if you have it installed
- **Clock/EGT Gauge Toggle**
    - There isn't room for both, so you have to pick one.
- **Show Pilot**
    - This toggles the pilot visibility even while you're in the plane
    - This is nice for shared-cockpit flights with a friend if you're pilot-monitoring
- **Show Copilot**
    - This toggles the copilot visibility
- **Show Wheel Chocks**
    - Only works in the tricycle gear versions
    - Brings out the wheel chocks for the main gear only
- **Show Engine & Pitot Covers**
    - These are actually important if you use Realism Mode as your pitot tube can get clogged while you're away if you forget to put these on between flights.
- **Toggle Autopilot**
    - Adds the Autopilot to your panel
- **Toggle DME**
    - Adds Distance Measuring Equipment to the right side of the panel
- **Toggle ADF**
    - This toggles between the default analog ADF and the KR87 with digital display
- **Toggle Transponder**
    - This toggles between the default analog transponder and the GTX330 with digital display

