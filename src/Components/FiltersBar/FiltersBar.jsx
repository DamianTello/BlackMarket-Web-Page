import { Button } from '../Header/Buttons/Button'

export const FiltersBar = ({setFilterType}) => {
  return (
    <div className='text-whitish mt-4 mx-auto text-xl h-fit flex flex-row items-center justify-between px-2'>
      <div className='w-full max-w-sm flex flex-row flex-wrap justify-between items-center gap-y-2'>
        <div className='w-20'>
          <Button
            extraClasses={' rounded-xl'}
            content={'Price\u{2B06}'}
            onClick={() => setFilterType('ascPrice')}
          />
        </div>
        <div className='w-20'>
          <Button
            extraClasses={' rounded-xl'}
            content={'Price\u{2B07}'}
            onClick={() => setFilterType('descPrice')}
          />
        </div>
        <div className='w-20'>
          <Button
            extraClasses={' rounded-xl'}
            content={'A-Z'}
            onClick={() => setFilterType('a-z')}
          />
        </div>
        <div className='w-20'>
          <Button
            extraClasses={' rounded-xl'}
            content={'Z-A'}
            onClick={() => setFilterType('z-a')}
          />
        </div>
      </div>
    </div>
  )
}
