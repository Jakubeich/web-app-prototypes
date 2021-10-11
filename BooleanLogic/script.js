var bit = new Array(2);
bit[0] = false;
bit[1] = false;
var bit_display = new Array(2);
var switch_display = new Array(2);
var image_c1 = new Image();
image_c1.src = "graphics/bulb_on.png";
var image_c2 = new Image();
image_c2.src = "graphics/switch_on.png";
bit_display[false] = "url(graphics/bulb_off.png)";
bit_display[true] = "url(graphics/bulb_on.png)";
switch_display[false] = "url(graphics/switch_off.png)";
switch_display[true] = "url(graphics/switch_on.png)";

    function toggle_switch(switch_no)
    {
        document.getElementById(switch_no).style.backgroundImage = switch_display[bit[switch_no] = !bit[switch_no]];
        show_result();
    }
    function show_result()
    {
        if(document.getElementById("operator").value == "NOT")
        {
            document.getElementById("0").style.backgroundImage = "none";
        }
            else
        {
            document.getElementById("0").style.backgroundImage = switch_display[bit[0]];
        }
            switch(document.getElementById("operator").value)
        {
            case "AND":
            document.getElementById("result").style.backgroundImage = bit_display[bit[0] && bit[1]];
            break;
            case "OR":
            document.getElementById("result").style.backgroundImage = bit_display[bit[0] || bit[1]];
            break;
            case "EOR":
            document.getElementById("result").style.backgroundImage = bit_display[bit[0] != bit[1]];
            break;
            default:
            document.getElementById("result").style.backgroundImage = bit_display[!bit[1]];
    }
}