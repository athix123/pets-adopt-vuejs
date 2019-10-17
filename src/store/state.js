import cats from '../dataDummy/dataCats'
import dogs from '../dataDummy/dataDogs'

export default {
	cats,
	dogs,
	pets: [...cats, ...dogs]
}