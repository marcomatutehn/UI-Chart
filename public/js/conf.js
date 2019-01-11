$(function() {
    $('#categoria').change(function(){
        $('.categoria').hide();
        $('#' + $(this).val()).show();
    });
});

$('#plain').click(function () {
    chart.update({
      chart: {
        inverted: false,
        polar: false
      },
      subtitle: {
        text: 'Plain'
      }
    });

    chart2.update({
        chart: {
          inverted: false,
          polar: false
        },
        subtitle: {
          text: 'Plain'
        }
      });

  });
  
  $('#inverted').click(function () {
    chart.update({
      chart: {
        inverted: true,
        polar: false
      },
      subtitle: {
        text: 'Inverted'
      }
    });
    chart2.update({
        chart: {
          inverted: true,
          polar: false
        },
        subtitle: {
          text: 'Inverted'
        }
      });
  });
  
  $('#polar').click(function () {
    chart.update({
      chart: {
        inverted: false,
        polar: true
      },
      subtitle: {
        text: 'Polar'
      }
    });
    chart2.update({
        chart: {
          inverted: false,
          polar: true
        },
        subtitle: {
          text: 'Polar'
        }
      });
  });
