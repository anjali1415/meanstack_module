var showWeather = () => {

    let cityName = $("#inputid").val() || "pune";
    let url = "https://api.openweathermap.org/data/2.5/weather?appid=2822b923e2da52ea45e08b4f499c3783&units=metric&q=" +
        cityName;
    $.ajax(url).done((datademo) => {
        console.log(datademo);
        //handlelogic(datademo);
        $("#parent :nth-child(1)").
            clone(true).css('display', 'flex').
            html(datademo.name + " " + datademo.main.temp_max)
            .insertBefore($("#parent :nth-child(1)"));

        //.insertBefore($("#parent :nth-child(1)"));
        /*$("#parent :nth-child(1)")
            .clone(true)
            .html(data1.name + " " + data1.main.temp_max + " V5")
            .insertBefore($("#parent :nth-child(1)"));*/
        //$('#textid').val("");
        $('#inputid').val("");

    });
};

/*let handlelogic = (datademo) => {
    const parent = $("#parent");
    console.log(parent.html());
    let ele2 = $("#parent :nth-child(1)").clone(true);
    //ele2.style.display = "flex";
    ele2.html(datademo.name + " " + datademo.main.temp_max);
    console.log(ele2.html());
    //ele2.style.display = "flex";
    //$("#parent").children().first().show();

    ele2.insertBefore($("#parent :nth-child(1)"));
    //parent.insertBefore(ele2, parent.firstChild);
}*/