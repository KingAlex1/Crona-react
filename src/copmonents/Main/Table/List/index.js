import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
    Table,
    Column,
    InfiniteLoader
} from 'react-virtualized'
import 'react-virtualized/styles.css'
import {fetchCodesLezyRequest} from "../../../../actions/codes";
import {
    getCodes,
    getCount
} from '../../../../reducers/codes'

import './index.scss'

export class List extends Component {

    componentDidMount() {
        this.props.fetchCodesLezyRequest()
    }


    rowGetter = ({index}) => {
        return this.props.codes[index]
    }

    handleRowClick = ({rowData}) => {
        const {selectEvent} = this.props
        selectEvent && selectEvent(rowData.uid)
    }

    isRowLoaded = ({index}) => index < this.props.codes.length

    loadMoreRows = () => {
        console.log('---', 'load more')
        this.props.fetchCodesLezyRequest()
    }


    render() {
        const {codes, count} = this.props

        return (
            <InfiniteLoader
                isRowLoaded={this.isRowLoaded}
                rowCount={count ? count : 0}
                loadMoreRows={this.loadMoreRows}
            >
                {({onRowsRendered, registerChild}) =>
                    <Table
                        className="table__list"
                        ref={registerChild}
                        rowCount={codes.length}
                        rowGetter={this.rowGetter}
                        rowHeight={40}
                        headerHeight={50}
                        width={900}
                        height={400}
                        overscanRowCount={5}
                        onRowClick={this.handleRowClick}
                        onRowsRendered={onRowsRendered}
                    >
                        <Column
                            label="Код ТН ВЭД"
                            dataKey="code"
                            width={200}
                        />
                        <Column
                            label="ОПИСАНИЕ"
                            dataKey="name"
                            width={700}
                        />
                    </Table>
                }
            </InfiniteLoader>

        )
    }
}


const mapStateToProps = state => ({
    codes: getCodes(state),
    count: getCount(state)


})

const mapDispatchToProps = {
    fetchCodesLezyRequest
}


export default connect(mapStateToProps, mapDispatchToProps)(List)