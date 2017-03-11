//Pure Functions
//Evaluates the same result given the same arguments
//Doesn't depend on and doesn't modify the states of variables out of the scope.
//No side effects (mutations, async reqs)

var USER_DATA = {
    name: 'Jubczak Jubowy',
    username: 'dzialkowicz',
    image: 'http://img.joemonster.org/mg/albums/new/160314/02ladna_pani.jpg'
}

var React = require ('react');
var ReactDOM = require ('react-dom');

//fn(d) = view 
/*
React compomenents should be:

    Focused
    Independent
    Reusable
    Small
    Testable

*/


var ProfilePic = React.createClass({
    render: function() {
        
        return<img src={this.props.imageUrl} style = {{height: 100, width: 100}} />
        
    }
});

var ProfileLink = React.createClass({
    render: function() {
        return(
            <div>
               <a href ={'https://www.github.com/' + this.props.username}>
                {this.props.username}
               </a>         
            </div>
        )

    }
});

var ProfileName = React.createClass({
    render: function() {  
        return( 
            <div>{this.props.name}</div>
            )
        
    }
});

//Container component for all Profile Name,Pic,Link

var Avatar = React.createClass({
    render: function() {
       return (
        <div>
            <ProfilePic imageUrl = {this.props.user.image}/>
            <ProfileName name = {this.props.user.name} />
            <ProfileLink username = {this.props.user.username} />
        </div>

       ) 
    }
})

ReactDOM.render(
    <Avatar user = {USER_DATA}/>,
    document.getElementById('app')
)