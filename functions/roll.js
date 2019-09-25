// navigate to /.netlify/functions/roll

exports.handler = function(event, context, callback) {
  const roll = Math.round(Math.random() * 20 + 1);
  const res = JSON.stringify({
    roll
  });
  callback(null, {
    statusCode: 200,
    body: res
  });
};
