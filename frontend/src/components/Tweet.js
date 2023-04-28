import Card from 'react-bootstrap/Card';

export default function Tweet(){
    return (
        <Card style={{width : '18rem'}}>
                <Card.Header className='d-flex'>
                <img 
                src='https://api.dicebear.com/6.x/lorelei/png/' 
                alt="Profile picture" 
                style={{width:'3rem', height:'3rem'}}
                className='rounded-circle'>
                </img>
                <div>
                    <p className='m-0 fs.1'>Screen Name</p>
                    <p className='m-0 text-muted'>@UserID</p>
                    <p>dato dato</p>
                </div>
                </Card.Header>
                <Card.Title>Title </Card.Title>
                <Card.Text> Lorem Ipsum</Card.Text>
                <Card.Img classname="rounded" variant='bottom' src="https://images.unsplash.com/photo-1682310270752-a77b4971df2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1200&q=60"></Card.Img>
        </Card>

    );

    }

