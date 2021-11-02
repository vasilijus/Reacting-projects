import React from 'react';

export default function withDataFetching( WrapperComponent ) {
    return class extends React.Component {
        constructor() {
            super(props);
            this.state = {
                data: [],
                loading: true,
                error: '',
            };
        }

        async componentDidMount() {

            try {
                const data = await fetch( this.props.dataSource );
                const dataJSON = await data.json();
console.log(dataJSON)
                if (dataJSON) {
                    this.setState({
                        data: dataJSON,
                        loading: false,
                    });
                }

            } catch(error) {
                this.setState({
                    loading: false,
                    error: error.message,
                });
            }

        }

        render() {
            const { data, loading, error } = this.state;

            return (
                <WrappedComponent
                    data={data}
                    loading={loading}
                    error={error}
                    {...this.props}
                />
            )
        }
    }
}