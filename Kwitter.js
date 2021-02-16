function addRoom()
{
      Room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name",Room_name);
      window.location="kwitter_page.html";
}