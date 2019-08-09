module.exports={
    'BDD EXPECT':''+function(client){
    client
    .url('https://login.salesforce.com/?locale=in');
    client.pause(1000);
    client.expect.element('body').to.be.present.before(1000);
    client.expect.element('body').to.have.css('display');
    client.expect.element('#username').to.be.an('input');
    client.expect.element('#username').to.be.visible;
    client.end();

    }

}