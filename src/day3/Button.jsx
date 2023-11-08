const Button=(props)=>
{
    return (<button className={`px-4 py-2 bg-blue-500 rounded-lg`}>{props.label}
    {props.children}
    </button>
    );
};
export default Button;