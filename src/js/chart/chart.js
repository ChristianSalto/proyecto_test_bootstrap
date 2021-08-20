Highcharts.getJSON(
  'https://demo-live-data.highcharts.com/aapl-ohlcv.json',
  function (data) {
    // split the data set into ohlc and volume
    var ohlc = [],
      volume = [],
      dataLength = data.length,
      i = 0;

    for (i; i < dataLength; i += 1) {
      ohlc.push([
        data[i][0], // the date
        data[i][1], // open
        data[i][2], // high
        data[i][3], // low
        data[i][4], // close
      ]);

      volume.push([
        data[i][0], // the date
        data[i][5], // the volume
      ]);
    }

    Highcharts.stockChart('container', {
      yAxis: [
        {
          opposite: false,
          labels: {
            enabled: true,
          },
          height: '80%',
          resize: {
            enabled: true,
          },
        },
        {
          opposite: false,
          labels: {
            enabled: true,
          },
          top: '80%',
          height: '20%',
          offset: 0,
        },
      ],
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: 'Volumen of trades',
          align: 'high',
        },
      },
      credits: {
        enabled: false,
      },
      navigator: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
      tooltip: {
        shape: 'square',
        headerShape: 'callout',
        borderWidth: 0,
        shadow: false,
        useHTML: true,
        pointFormatter: function () {
          return '<div _ngcontent-plr-c6="" class="chart-legend"><div _ngcontent-plr-c6="" class="chart-legend-box box-1">Investment name</div></div>';
        },
        split: false,
      },
      legend: {
        enabled: true,
        align: 'left',
        verticalAlign: 'top',
        useHTML: true,
        labelFormatter: function () {
          return '<div _ngcontent-plr-c6="" class="chart-legend"><div _ngcontent-plr-c6="" class="chart-legend-box box-1">Investment name</div></div>';
        },
      },
      series: [
        {
          type: 'line',
          id: 'aapl-ohlc',
          name: 'AAPL Stock Price',
          data: ohlc,
        },
        {
          type: 'column',
          color: '#0000ff',
          id: 'aapl-volume',
          name: 'AAPL Volume',
          data: volume,
          yAxis: 1,
        },
      ],

      rangeSelector: {
        inputEnabled: false,
        buttonPosition: false,
        enabled: false,
      },
    });
  },
);
